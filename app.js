var  methodOverride = require('method-override'),
         bodyParser = require('body-parser'),
           mongoose = require('mongoose'),
            express = require('express'),
              flash = require('connect-flash'),
        
               Blog = require('./models/blog'),
             Course = require('./models/course'),
             seedDB = require('./seeds'),
            Comment = require('./models/comment'),
               User = require('./models/user'),
           Question = require('./models/question'),
               Post = require('./models/post'), 
           passport = require('passport'),
      LocalStrategy = require('passport-local'),
        
            
                app = express();

  var commentRoutes = require('./routes/comments'),
        blogsRoutes = require('./routes/blogs'),
         authRoutes = require('./routes/index'),
         subsRoutes = require('./routes/subscribe'),
      profileRoutes = require('./routes/profile'),
          pinRoutes = require('./routes/pin'),
         likeRoutes = require('./routes/like'),
      complexRoutes = require('./routes/complex');
       
     
var multer = require('multer');     
var path = require('path');
var fs = require('fs');
var formidable = require('formidable');
var cloudinary = require('cloudinary');

//seedDB(); //Seed the database

//================================================PASSPORT CONFIGURATION==================================================//

app.use(require('express-session')({
  secret: "This is secret",
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//================================================PASSPORT CONFIGURATION==================================================//


/////passing "currentUser" to every template/////////////////
app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  res.locals.message = req.flash("error");
  next();
})

/////////////////////////////////////////////////////////////

 cloudinary.config({ 
 cloud_name: 'sp241930', 
 api_key: '341146687494171', 
 api_secret: 'WmnXbsxK8GgFWshpvUe09kZqaAA' 
 }); 




   //==================================================APP CONFIG=========================================================//
   mongoose.Promise = global.Promise;
   mongoose.connect('mongodb://localhost/BlackPost', { useMongoClient: true, });
   app.set('view engine','ejs');
   app.use(express.static('public'));
   app.use(bodyParser.urlencoded({extended:false}));
   app.use(methodOverride('_method'));

  //===================================================APP CONFIG==========================================================//







// //==============ADDING DATA================//
//     Course.create({
//      courseTitle:'HTML basics',
//      titleImage :'http://www.spilgames.com/wp-content/uploads/2014/12/documentation_html5_logo.png',
//      Chapters:[{"lessons":"Part 1"},{"lessons":"Part2"},{"lessons":"Part3"},{"lessons":"Part4"},{"lessons":"Part5"}]
//     });

// var datas = db.blogs.find({"creater.username":"developer"});
// console.log(datas);



    



  
//==============ADDING DATA================//

//==================================================RESTFUL ROUTES=========================================================//



 app.use(authRoutes);
app.use(commentRoutes);
app.use(blogsRoutes);
app.use(subsRoutes);
app.use(profileRoutes);
app.use(pinRoutes);
app.use(likeRoutes);
app.use(complexRoutes);







app.listen(3000, function () {
  console.log('Server started');
});