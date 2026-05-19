// here we define the type of data we're gon enter for the reviews basically like rules ki kaisa hona chahiye.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min:0,
        max:5,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
});

module.exports=mongoose.model("Review", reviewSchema);
//Created a Review model with schema of reviewSchema.