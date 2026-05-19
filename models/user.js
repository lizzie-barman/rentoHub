//here we are making the structure for the users like what what should be there in a user.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose').default;

const userSchema = new Schema({ //we not adding username and password in schema cuz local-mongoose adds them themselves automatically.
    email: {
        required: true,
        type: String
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
