const joi = require("joi")

const productSchema = joi.object({
    productName: joi.string().required(),
    quantity: joi.number().required(),
    description: joi.string().required()
})

module.exports = productSchema