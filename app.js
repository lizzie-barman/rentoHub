const express = require("express");
const app = express();
app.use(express.json());

const mongoose= require("mongoose");
if(process.env.NODE_ENV!="production"){
    require("dotenv").config(); //to connect the .env file w our project backend, using if so that during deployment the .env doesnt get deployed
}

const path = require("path");
const methodOverride = require("method-override"); // for updation and deletion
const ejsMate = require("ejs-mate"); //for better styling
const ExpressError = require("./utils/expressError.js");

const multer = require("multer"); //using multer so that baCKEND CAN PARSE THE image files that we are sending w the form. normally urlencoded does the job but for file uploads we need to have multer
const {storage}  = require("./cloudConfig.js"); // requiring the storage format
const upload = multer({storage}); //choosing the destination where the images sent will be saved.

const session = require("express-session"); // to create and manage user sessions so the server can remember users between requests (like keeping them logged in)
// the above stores the session data in server memory, which is not good for production because data gets lost on restart.
//Hence we use connect-mongo. connect-mongo is a session store that saves those session data in MongoDB instead of RAM. The browser only stores a session ID cookie, while the actual session information is stored securely in MongoDB. 
const MongoStore = require("connect-mongo").default; // for storage of production level express sessions,i.e. storage of cookies nd stuff.

//session info if ept unchanged is stored in mongo for default 14 days but we can set our own timing.
//////

const flash = require("connect-flash");// to give flash msgs (one time popups)
const passport = require("passport"); // to do authentication 
const LocalStrategy = require("passport-local");

const User = require("./models/user.js");

const listingRouter = require("./routes/listings.js"); // we requiring the routes files so that the app.js doesnt get congested
const reviewRouter = require("./routes/reviews.js");
const userRouter = require("./routes/user.js");

main()
    .then(()=>{
       console.log("Connected to DB");
    })
    .catch((err)=>{
       console.log(err);
    });
async function main(){
    await mongoose.connect(process.env.MONGO_URI);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true})); //so that the data that is coming can be parsed by app.js
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public"))); //we use public folder to serve static files like css ka code, js ka koi logic etc


//to make the mongostore that will save the session info in mongodb.

const store= MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600, //to mae sure that the site refresh is done every 24 hours.
});

store.on("error", (err)=> {
    console.log("ERROR IN MONGO SESSION STORE", err);
});

//To use and store express sessions in the server memory(to make the site stateful)
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    //setting the expiry date for cookie like when will it expire.
    cookie: {
        expires: Date.now() + 7* 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};


// to implement flash msgs like user added, login dine etc.
app.use(session(sessionOptions));
app.use(flash());

// passport usage is for authentication of user.
app.use(passport.initialize());
app.use(passport.session());
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    //console.log(req.user);
    //console.log("....", req);
    next();
});


app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


//Error handling for the routes that dont exist and people try to go to them
app.use((req,res,next) => {
    next(new ExpressError(404, "Page not found."));
});

//Middleware catches the error from server side and displays it.
app.use((err, req, res, next) => {
    let { statusCode = 500 , message = "something went wrong" } = err;
    //res.status(statusCode).send(message);
    res.status(statusCode).render("error", { err });
});


app.listen(8080,() =>{
    console.log("Connected to 8080");
});