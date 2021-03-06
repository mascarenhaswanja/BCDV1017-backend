const jwt = require('jsonwebtoken');

const { privateKey } = require('../db/privateKey');

exports.checkLogin = (req, res, next) => {
    const adminToken = req.cookies.adminToken;

    if (!adminToken) {
        res.status(401).send({ message: 'Invalid login/password 1' });
    }

    try {
        jwt.verify(adminToken, privateKey);
    } catch (error) {
        res.status(401).send({ message: 'Invalid login/password 2' });
    }

    next();
}