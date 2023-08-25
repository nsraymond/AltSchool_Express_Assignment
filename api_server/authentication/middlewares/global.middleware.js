const users = require('../users/users.json');

// API AUTHENTICATION
function apiKeyAuth(req, res, next) {
    const authHeader = req.headers;
    if (!authHeader.api_key) {
        return res.status(401).json({ message: 'You are not authenticated!' });
    }
    const existingUser = users.find(user => user.api_key === authHeader.api_key)
    if (existingUser) {
        req.user = existingUser
        next();
    } else {
        return res.status(401).json({ message: 'You are not authenticated!' });
    }
}

// AUTHORIZING ADMIN
function checkAdmin(req, res, next) {
    if (req.user.user_type !== 'admin') {
        return res.status(403).json({ message: 'You are not authorized!' });
    }
    next()
}

// HANDLING EMPTY REQ.BODY
function checkBody(req, res, next) {
    if (!req.body) {
        res.status(400).json({
            data: null,
            error: 'must have a body'
        })
    }
    next()
}

module.exports = {
    apiKeyAuth,
    checkAdmin,
    checkBody,
}