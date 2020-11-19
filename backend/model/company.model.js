var mongoose = require("mongoose");

var CompanySchema = mongoose.Schema;

var CompanySchemaRef = new CompanySchema({
    cname:String,
});

var CompanyModel = mongoose.model("company",CompanySchemaRef);

module.exports = CompanyModel;