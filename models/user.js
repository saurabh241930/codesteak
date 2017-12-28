var  mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({




username:String,

password :String,
  
FavouriteColor:String,
  
ThemeColor:String,
  
ReputationScore:{type:Number,default:1},
  
TotalProjectViewed:{type:Number,default:0},
  
Visited:{type:Number,default:1},

ProfileImage:{ type: String, default: "https://mybluerobot.com/wp-content/plugins/svg-avatars-generator/data/temp-avatars/svgA7705990811968029.png" },


friends:[{    
username: String
}],

ProjectCreatedByFriends:[{
title:String,
username:String
}],

messages:[{
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},

texts:[{
username:String,
message:String
}],

User:String
}],

  
following:[{
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String
}], 

followers:[{
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String
}], 
  
  

friendRequest:[{
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String,
Status:{type:String,default:"Accept" }, 
Color:{type:String,default:"blue" } 
}], 

  
  
friendRequestNotification:[{
  
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String,
Status:{type:String,default:"Accept" }, 
Color:{type:String,default:"blue" } 
}], 
  
  
  BlogLikedNotification:[{
  
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String,
Projectname:String
}], 

  
 YourfriendRequestedNotification:[{
   
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String

}], 
 
  
  
 AcceptedfriendRequestedNotification:[{
   
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String

}], 
  
   CommentNotification:[{
   
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "User"
},
username: String,
Projectname:String,
Text:String

}], 
  
  


registeredClasses:[{
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "Blog"
},
classname: String,
}],




createdProjects:[{
id:{
type : mongoose.Schema.Types.ObjectId,
ref : "Blog"
},
classname: String,
}]   
});






UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);