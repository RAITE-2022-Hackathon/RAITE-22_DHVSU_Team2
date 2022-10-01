const jwt = require("jsonwebtoken");

const jwtSecret = "SECRET";

module.exports = function (req, res, next) {

  try {
    const bearerToken = req.headers.authorization;
    
    const token = bearerToken.split(' ')[1];

    if (!token) {
      throw { statusCode: 403, message: "No token, authorization denied" };
    }

    const decoded = jwt.verify(token, jwtSecret);

    req.authPayload = decoded;
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
