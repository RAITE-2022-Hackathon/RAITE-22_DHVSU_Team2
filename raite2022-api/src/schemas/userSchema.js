const joi = require("joi")

const userSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    userName: joi.string().required().min(4).max(16),
    password: joi.string().required().min(4).max(16),
    birthDay: joi.string().required(),
})

module.exports = userSchema