//load all module
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const { json } = require("body-parser");

var port =9090;
// CORS to allow angular front end to connect
var cors = require("cors");

//Data URL Details
var url = "mongodb://localhost:27017/capstone";
/*
db name : capstone
4 tables: product, company, admin, user.
*/
//creating ref of express
var app = express();

//middleware
app.use(bodyParser.json()); //convert json req data. Post
app.use(bodyParser.urlencoded({extended:true})); // enable post, put, delete
app.use(cors()); // enable cors
//Database Connection with avoid warning properties . useUrlParser:true,
mongoose.connect(url,{useUnifiedTopology: true});

//
var db = mongoose.connection;

//routing methods
var Product = require ("./router/product.router.js");
app.use("/product",Product);

var Company = require ("./router/company.router.js");
app.use("/company",Company);

var Admin = require ("./router/admin.router.js");
app.use("/admin",Admin);

var Account = require ("./router/account.router.js");
app.use("/account",Account);

app.listen(port,()=> console.log("on port: "+ port));


