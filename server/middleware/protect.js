const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
    const token = req.headers["auth-token"];
  
    if (!token) {
      return res.status(403).json({status: false, message:"A token is required for authentication"});
    }
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      console.log(decoded)
      req.user = decoded;
    } catch (err) {
      return res.status(401).json({status: false, message: "Invalid Token"});
    }
    return next();
  };
  
  module.exports.requireAuth = requireAuth;