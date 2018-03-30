const jwt = require('jwt-simple');


module.exports = function(req, res, next) {
  console.log(req.headers);

  var token = req.headers['x-access-token'];

  if(token) {
    try {
      var decoded = jwt.decode(token, process.env.SHOELACES_API_SECRET);

      if (decoded.key === process.env.SHOELACES_API_KEY) {
        next();
      } else {
        res.status(401).json({"message": "Invalid token or key"});
      }
    } catch (err) {
      res.status(500).json({"message": "something went wrong"});
    }
  } else {
    res.status(401).json({"message": "Invalid token or key"});
  }
  return;
};