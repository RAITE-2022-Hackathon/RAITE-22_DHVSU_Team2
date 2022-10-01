const joi = require("joi")

const logInSchema = joi.object({
    userName: joi.string().required(),
    password: joi.string().required()
})

module.exports = logInSchema