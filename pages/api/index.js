const jwt = require('jsonwebtoken');

export default function handler(req, res) {
    // verify jwt token from request
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }

    // //get token from bearer token
    const bearerToken = token.split(" ")[1];
    //verify token
    const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
    if (!decoded) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    const { email, id } = decoded;
    res.status(200).json({ email, id });
  }