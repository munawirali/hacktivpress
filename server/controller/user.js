const hash = require('../helper/hash');
const token = require('../helper/jwt');
const genSalt = require('../helper/saltGen');
const user = require('../models/user');

class User {
  static sigin(req,res){
    if (req.body.username == '' || req.body.password == '') {
      req.status(400).send('username/password anda salah')
    } else {
      user.findOne({username:req.body.username})
      .then(rows => {
        if (rows.password === hash(req.body.password, rows.salt)) {
          res.json({
            message:'Login berhasil',
            roken:token.create({
              userId:rows._id,
              username:rows.username,
              imageUrl:rows.imageUrl
            })
          })
        } else {
          req.status(400).send('username/password anda salah')
        }
      })
      .catch(err => {
        req.status(400).send(err)
      })
    }
  }
  static signup(req,res){
    let salt=genSalt();
    user.create({
      username:`${req.body.username}`,
      password:`${createHash(req.body.pasword, salt)}`,
      imageUrl:`${req.body.imageUrl}`,
      role:`user`,
      salt:`${salt}`
    })
    .then((rows)=>{
      res.json({
        message:'Signup Sukese',
        data:rows
      })
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = User
