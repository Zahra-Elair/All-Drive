const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) return res.sendStatus(403);

            req.auth = payload;
            // auth: { userId }
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

module.exports = authMiddleware;
