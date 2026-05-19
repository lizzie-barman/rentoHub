//connecting and adding data to database.
const mongoose = require ("mongoose");
const initData = require("./data.js");
const Listing = require ("../models/listing.js");
const Review = require("../models/review.js");

require("dotenv").config({ path: "../.env" });
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

const initDB = async ()=>{
    //await Listing.deleteMany({});
    await Review.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner:"699ae1c9a9efbc0b5b98f9a2",
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();

