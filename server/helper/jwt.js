const jwt = require('jsonwebtoken');

class Token {
  static create(data){
    return jwt.sign(data, proccess.env.APPSECRET)
  }
  static verify(data){
    return jwt.verify(data, proccess.env.APPSECRET)
  }
}

module.exports = Token
