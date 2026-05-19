const Listing = require("./models/listing.js");
const path = require("path");
const ExpressError = require("./utils/expressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");//we are exporting the validations from schema.js to check if the info sent by users are right or not


// to create a server side validation schema middleware
module.exports.validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(","); //to combine different error messages all together
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}; 



module.exports.validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(","); //to combine different error messages all together
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) { //builtin fncn on passport to check if user is logged in.

        if (req.method === "GET") {
            req.session.redirectUrl = req.originalUrl;
        }

        req.flash("error", "You must be logged in.");
        return res.redirect("/login");
    }

    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if (!listing) { 
        req.flash("error", "Listing not found"); 
        return res.redirect("/listings");
    }
    if(!listing.owner.equals(res.locals.currUser._id)){     //ye hai taki koi third person aake humare post ko edit na krde from hopsxoth etc.
        req.flash("error", "You have no permission to edit.");
        return res.redirect(`/listings/${id}`);
    }
    next();
}