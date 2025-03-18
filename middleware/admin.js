// const { Admin } = require('../db/index') Both of the syntax are same. 
const { Admin } = require('../db')

// Middleware for handling auth
function adminMidddleware(req, res, next) {
    // Implement Admin auth logic
    // You need to check the headers and validate the admin from the admin DB.

    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username: username,
        password: password 
    })
    .then(function(value) {
        if (value) {
            next();
        }else {
            res.status(403).json({
                msg: "User Doesnt Exist"
            })
        }
    })
}

module.exports = adminMidddleware