const Account = require('../model/account.model.js');

const jwt = require("jsonwebtoken");
const TOKEN_SECRET='09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611'

exports.findAll = (req, res) => {
    Account.find((err, accounts) => {
        if (err) throw err;
        res.send(accounts)
    });
};

exports.addAccount = (req, res) => {
    Account.create(req.body, (err, account) => {
        if (err) throw err;
        res.send(account);
    })
}

exports.login = (req, res) => {
    Account.find()
        .where('email').equals(req.body.email)
        .where('password').equals(req.body.password)
        .count(function (error, numRows) {
            //generate jwt token
            let t = jwt.sign({email: req.body.email}, TOKEN_SECRET, { expiresIn: '1800s' } );// only for object literal
            console.log("server generated token:" + t);
            
            res.status(200).json({
                token: t
            });
            
        });
}
// admin portal
exports.adminLogin = (req, res) => {
    //only check for matching hard coded cred
    //admin@gmail.com ; password
    if ( 
        req.body.email.equals('admin@gmail.com') &&
    req.body.password.equals('password')){
        console.log("you got it right");

        //generate and return jwt token
        let t = jwt.sign({email: req.body.email}, TOKEN_SECRET, { expiresIn: '1800s' } );// only for object literal
        console.log("server generated token:" + t);
        
        res.status(200).json({
            token: t
        });
    }
}