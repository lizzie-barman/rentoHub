const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {isLoggedIn, isOwner, validateListing} = require("../loginware.js");
const listingController = require("../controllers/listings.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");

const upload = multer({ storage });

//Index Route
//router.get("/", wrapAsync(listingController.index));

//Create New Route
//router.get("/new", isLoggedIn, wrapAsync(listingController.getNewForm));

// used validateListing as a middleware here for handling the erros or else everytime we had to define it on our own
//router.post("/", isLoggedIn, validateListing, wrapAsync(listingController.createNew));

//Show Route
//router.get("/:id", wrapAsync(listingController.showListing));

//Edit Route
//router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.getEditForm));

//app.put is for edit method
//router.put("/:id",isLoggedIn, isOwner, validateListing, wrapAsync(listingController.editListing));

//Delete Route
//router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

// WHAT WE DID ABOVE IS TOTALLY FINE AND RIGHT, BUT THERES AN EVEN COMPACT FORM OF WRITING THE ROUTES WHICH IS USING ROUTER.ROUTE

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createNew));

router.get("/new", isLoggedIn, wrapAsync(listingController.getNewForm));

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.single("listing[image]"),validateListing, wrapAsync(listingController.editListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.getEditForm));

module.exports = router;