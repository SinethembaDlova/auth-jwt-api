require("dotenv").config();
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const access_token = authHeader && authHeader.split(" ")[1];

    if (access_token === null) return res.status(401).json({ message: "You are not authenticated." })

    jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if(error) return res.status(403).json({ message: "The access token is not valid." })

        req.user = user;
        next();
    });
  };
