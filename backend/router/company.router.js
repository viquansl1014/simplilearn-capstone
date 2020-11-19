var express = require("express");
var router = express.Router();

var CompanyController = require("../controller/company.controller.js");
const CompanyModel = require("../model/company.model.js");

//routes
router.get("/companyFromDb",CompanyController.GetCompanyFromDb);
router.get("/companyInfoById/:id",CompanyController.GetCompanyById);
router.post("/newCompany",CompanyController.StoreCompanyInfo);
router.put("/updateCompany",CompanyController.UpdateCompanyInfo);
router.delete("/deleteCompany/:id",CompanyController.DeleteCompanyInfo);

module.exports = router;