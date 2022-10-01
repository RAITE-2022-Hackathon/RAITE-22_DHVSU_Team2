const joi = require("joi")

const productSchema = joi.object({
    coinName: joi.string().required(),
   
})

module.exports = productSchema