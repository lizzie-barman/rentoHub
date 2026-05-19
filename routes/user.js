const express = require("express");
const router = express.Router();  //Express app ke andar routes ko modular aur organized banana. different routes ke liye diff files banaya h..usko combine krne ke liye
const path = require("path"); //File aur folder ke raste (paths) ko handle karna
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const User = require("../models/user.js"); 
const passport = require("passport");
const { saveRedirectUrl } = require("../loginware.js");
const userController = require("../controllers/users.js");

// router.get("/signup", userController.getSignUp);

// router.post("/signup", wrapAsync(userController.postSignUp));


// router.get("/login", userController.getLogin);

// //the passport.authenticate is a middleware by passport to authenticate(check) that hwterther the user is there in the database or not.
// router.post("/login", saveRedirectUrl,  
//     passport.authenticate("local", { 
//         failureRedirect: "/login", failureFlash: true }), userController.postLogin);


// router.get("/logout", userController.getLogOut);

router
    .route("/signup")
    .get(userController.getSignUp)
    .post(wrapAsync(userController.postSignUp));

router
    .route("/login")
    .get(userController.getLogin)
    .post(saveRedirectUrl, passport.authenticate("local", { 
        failureRedirect: "/login", failureFlash: true }), userController.postLogin);

router.get("/logout", userController.getLogOut);

module.exports = router;