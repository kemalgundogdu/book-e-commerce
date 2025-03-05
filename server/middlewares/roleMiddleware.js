const jwt = require("jsonwebtoken");

const roleMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];;
  if (!token) return res.status(401).json({ message: "Yetkisiz erişim" });

  try {
    const decoded = jwt.verify(token, 'gizli_key');
    req.user = decoded;
    if(decoded.role=="admin") {
      next();
    } else {
      res.status(403).json({ message: "Admin yetkisi gerekli" });
    }
  } catch (error) {
    res.status(401).json({ message: "Geçersiz token" });
  }
};

module.exports = roleMiddleware