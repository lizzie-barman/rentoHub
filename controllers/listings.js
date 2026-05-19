const Listing = require("../models/listing");

// to get home page
module.exports.index = async (req,res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index", {allListings});
}; 

// to get new listing form
module.exports.getNewForm = async(req,res)=>{
    res.render("listings/new");
};

//to post new listing info
module.exports.createNew = async(req,res,next)=>{ 
    const newListing = new Listing(req.body.listing);
    if(req.file){
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
    }
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};

//to show the listing
module.exports.showListing = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({
        path: "reviews", populate: { path: "author"} }).populate("owner");
    if(!listing){
        req.flash("error", "Listing not  found");
        return res.redirect("/listings");
    }
    res.render("listings/show", {listing});
};

//to get edit listing form
module.exports.getEditForm = async(req,res)=>{
    let {id}= req.params;
    const listing= await Listing.findById(id);
    res.render("listings/edit",{listing});
};

//to edit the listing
module.exports.editListing = async(req,res) =>{  
    let {id} = req.params;
    const listing= await Listing.findByIdAndUpdate(id, {...req.body.listing},{new: true}); //here we are using req.body.listing for updating all the text formatted data bcz its stored in req.body
    if(req.file){ //here we're using req.file bcz images are stored in req.file.. also we could directly update it inside findbyupdate command but we using this if for extra security
        listing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

//to delete listing
module.exports.deleteListing = async(req,res)=>{
    let {id}= req.params;
    let deletedListing= await Listing.findByIdAndDelete(id);
    if(deletedListing){
        req.flash("success", "Listing deleted successfully!");
    }
    res.redirect("/listings");
};