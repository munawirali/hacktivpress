const jwt = require('jsonwebtoken');

class Token {
  static create(data){
    return jw.sign(data, proccess.env.APPSECRET)
  }
  static verify(data){
    return jw.verify(data, proccess.env.APPSECRET)
  }
}

moduele.exports = Token
