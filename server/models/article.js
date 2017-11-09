const mongoose = require('mongoose');
mongoose.connection.openUri(`${process.env.APPDB}`,(err)=>{
  if (err) {
    console.log(err);
  }
});
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
    title     : { type:String },
    content   : { type:String },
    category  : { type:String },
    imageUrl  : { type:String },
    author    : { type:Schema.Types.ObjectId, ref: 'Users' },
});

module.exports = mongoose.model('Articles', ArticleSchema);
