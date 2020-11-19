var express = require("express");
var router = express.Router();

var AdminController = require("../controller/admin.controller.js");
const AdminModel = require("../model/admin.model.js");

//routes
router.get("/adminFromDb",AdminController.GetAdminFromDb);
router.get("/adminInfoById/:id",AdminController.GetAdminById);
router.post("/newAdmin",AdminController.StoreAdminInfo);
router.put("/updateAdmin",AdminController.UpdateAdminInfo);
router.delete("/deleteAdmin/:id",AdminController.DeleteAdminInfo);

module.exports = router;