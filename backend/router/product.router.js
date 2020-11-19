var express = require("express");
var router = express.Router();

var ProductController = require("../controller/product.controller.js");
const ProductModel = require("../model/product.model.js");

//routes
router.get("/productFromDb",ProductController.GetProductFromDb);
router.get("/productInfoById/:id",ProductController.GetProductById);
router.post("/storeProduct",ProductController.StoreProductInfo);
router.put("/updateProduct",ProductController.UpdateProductInfo);
router.delete("/deleteProduct/:id",ProductController.DeleteProductInfo);

module.exports = router;