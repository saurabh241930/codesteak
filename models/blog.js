 var mongoose = require('mongoose');
//=====================================================SCHEMA==============================================================//
var blogSchema = new mongoose.Schema({
html:String,
  
css:String,
  
javascript:String, 
  
title:String,
  
image :String,
  
body :String,
  
Views:{type:Number,default:1},
  
CarouselStatus:{type:String,default:"item"},
  
LikedUser:[{
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String
}], 

ViewedUser:[{
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String
}], 

creater:{

id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String
},


  

comments:[
{
type : mongoose.Schema.Types.ObjectId,
ref : "Comment"
}
],
created:{type:Date,default:Date.now},


registeredUsers:[{
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String
}]       

});





//=====================================================SCHEMA==============================================================//




//================================================MODEL CONFIG=============================================================//
module.exports = mongoose.model("Blog",blogSchema);
//=================================================MODEL CONFIG============================================================//
