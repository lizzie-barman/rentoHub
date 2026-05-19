// basically for server side error handling. this file is to make few schema validations as to how the data sent by the user should be so that faltu info isnt stored 

const Joi = require('joi'); // we use the npm package joi to check if the data sent by the user is valid or not

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.object(
            { url: Joi.string().uri().allow("") }
        ),
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(0).max(5),
        comment: Joi.string().required(),
    }).required()
});

