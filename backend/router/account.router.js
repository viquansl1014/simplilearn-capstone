
var express = require("express");
var router = express.Router();

var AccountController = require("../controller/account.controller.js");

//routes
// Find all products
router.get('/api/accounts',AccountController.findAll);
// Add New Product
router.post('/api/accounts/register',AccountController.addAccount);
router.post('/api/accounts/login',AccountController.login);


module.exports = router;