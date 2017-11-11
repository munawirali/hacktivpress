const article = require('../models/article');

class User {
  static findAll(req,res,next){
    article.find({
    })
    .populate('author')
    .then(rows=>{
      res.status(200).json({
      meesage:'Data founded',
      data:rows
      });
    })
    .catch(err=>{
      res.status(400).json(err)
    })
  }
  static findById(req,res,next){
    article.findById(req.params.id)
    .then(rows=>{
      res.status(200).json({
      meesage:'Data founded',
      data:rows
      })
    })
    .catch(err=>{
      res.status(400).json(err)
    })
  }
  static findByUser(req,res,next){
    // console.log('ini params', req.params.id);
    article.find({author:req.params.id})
    .populate('author')
    .then(rows=>{
      console.log('jangkrik tenan', rows);
      res.status(200).json({
      meesage:'Data founded',
      data:rows
      })
    })
    .catch(err=>{
      res.status(400).json(err)
    })
  }
  static create(req,res,next){
    article.create({
      title:`${req.body.title}`,
      content:`${req.body.content}`,
      category:`${req.body.category}`,
      imageUrl:`${req.body.imageUrl}`,
      author:req.body.author,
    })
    .then((rows)=>{
      res.json({"message":"Create data sukses",
      data:rows});
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static update(req,res,next){
    article.findOneAndUpdate({
        _id:req.params.id
      },{
        title:`${req.body.title}`,
        content:`${req.body.content}`,
        category:`${req.body.category}`,
        imageUrl:`${req.body.imageUrl}`,
        author:`${req.body.author}`,
    })
    .then((rows)=>{
      res.json({"message":"Update data sukses",
      data:rows});
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static delete(req,res,next){
    article.findOneAndRemove({
        _id:req.params.id
      })
    .then((rows)=>{
      res.json({"message":"Delete data sukses",
      data:rows});
    })
    .catch(err=>{
      res.send(err);
    })
  }
}

module.exports = User
