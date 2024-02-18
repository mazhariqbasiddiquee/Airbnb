const jwt = require('jsonwebtoken');
require('dotenv').config()
const auth = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: " Please login to visit." });
    }

    try {
        var decoded = jwt.verify(token, process.env.Secret);
        if (decoded) {
            req.body.Guest_id=decoded._id
            next();
        } else {
            return res.status(401).json({ message: " Please login to visit." });
        }
    } catch (error) {
        return res.status(401).json({ message: " Please login to visit." });
    }
}

module.exports = auth;
