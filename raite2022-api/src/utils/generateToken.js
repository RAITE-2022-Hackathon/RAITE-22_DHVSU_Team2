const jwt = require("jsonwebtoken");

const generateToken = (data) => {
    let jwtSecretKey = 'SECRET';

    const expirationTime = '100h';
    const token = jwt.sign(data,jwtSecretKey,{
        expiresIn: expirationTime
    });

    return token;
}


module.exports = { generateToken };