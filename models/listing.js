// here we define the type of data we're gon enter for the listings basically like rules ki kaisa hona chahiye.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const listingSchema = new Schema({
    title: {
        type : String,
        required : true
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "default"
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
            set: v=> v === "" ? undefined : v
        }
    },
    price : Number,
    location : String,
    country : String,
    reviews : [
        {
            type: Schema.Types.ObjectId,
            ref: "Review" //we're using Review model meaning it will act according to the review model
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    category : [String],
});

//making logic that if a listing is deleted, the reviews of that listing is delete with it.
listingSchema.post("findOneAndDelete", async(listing) =>{
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews}});
    }
})
// after making a listing type we make the model Listing and then export it to app.js
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;