const jwt = require("jsonwebtoken");
const secret = 'se@3121F$#^&';


const verifyToken = (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers["access-token"];
    if(!token){
        return res.status(401).send("You don't have permission for this.!")
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
      } catch (err) {
        return res.status(401).send("Invalid Token");
      }
    return next();

};

module.exports = verifyToken;