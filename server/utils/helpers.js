
// this file will have all the methods that we will use again and again, so we are defining all of them here for anywhere use

const jwt = require("https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");  // install `npm i jsonwebtoken`
exports = {};
require('dotenv').config(); // include .env into project TO access environment variable

exports.getToken = async (email, user) => {
    const token = jwt.sign({identifier: user._id}, process.env.PASSPORT_JWT_SECRETKEY );
    return token;
};

module.exports = exports;


