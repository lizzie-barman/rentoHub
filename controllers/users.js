const User = require("../models/user");
const Listing = require("../models/listing");
const Review = require("../models/review"); 

module.exports.getSignUp = (req,res) => {
    res.render("users/signup.ejs");
}; 

module.exports.postSignUp = async (req,res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({ username, email }); //to initiliaze the ew user data
        const registeredUser = await User.register(newUser, password); //to add the password to database with the salted nd hashed password.
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "user successfully registered");
            res.redirect("/listings");
        });
    } catch(err){
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

module.exports.getLogin = (req,res) => {
    res.render("users/login.ejs");
};

module.exports.postLogin = async (req,res) => {
    req.flash("success", "Congratulations you are logged in.");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.getLogOut = (req,res,next) => {
    req.logout((err) =>{
        if(err) {
           return next(err);
        }
        req.flash("success", "You have logged out");
        res.redirect("/listings");
    })
};