const express = require("express");
const router = express.Router({ mergeParams: true }); //gotta use mergeparams cuz we are retriveing the reviews id.
const wrapAsync = require("../utils/wrapAsync.js"); 
const {isLoggedIn, isOwner, validateReview} = require("../loginware.js");
const reviewController = require("../controllers/reviews.js");


//Review Route
//Post Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.postReview));
//Delete Review Route

router.delete("/:reviewId", isLoggedIn, isOwner, wrapAsync(reviewController.deleteReview));

module.exports = router;