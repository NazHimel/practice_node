let mongoose = require('mongoose');
let Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

let tweetSchema = new Schema({
  
  from: {
    type: ObjectId,
    ref:'user'
  },
  
  tweet: {
    type: String,
    
  },
  dateTime: {
    type: Date
  }
});

let tweetModel = mongoose.model('tweet', tweetSchema);
module.exports.tweetModel=tweetModel;
