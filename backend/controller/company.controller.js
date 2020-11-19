var CompanyModel = require("../model/company.model.js");

//Retrieve Company Details from Db

var GetCompanyFromDb = (req, res)=>{
    CompanyModel.find({},(err,data)=>{
        if(err) throw err;

        res.json(data);

    })
};

var GetCompanyById = (req,res)=>{
    var idInfo = req.params.id;
    CompanyModel.find({_id:idInfo},(err,data)=>{
        if(err) throw err;

        res.json(data);
    })
}

var StoreCompanyInfo = (req,res)=>{
    let Company = new CompanyModel({
        cname:req.body.cname,
    });
    console.log("saving");
    Company.save((err,result)=> {
        if(err) throw err;

        //res.send("Record stored successfully in Db"+ result);
        res.json({"msg":"record saved succesfully"});
    })

}

var UpdateCompanyInfo = (req,res) =>{
    var updateId = req.body.cid;
    var updateName = req.body.cname;
    CompanyModel.updateOne({_id:updateId},{$set:{cname:updateName}}, (err, result)=>{
        if(err) throw err;
        //res.send("Record updated...." + result);
        if(result.nModified>0){
            res.json({"msg":"Record updated"});
        }else{
            res.json({"msg":"Record not updated"});
        }
    })
}

var DeleteCompanyInfo = (req, res)=>{
    var deleteId = req.params.id;
    CompanyModel.deleteOne({_id:deleteId},(err,result)=>{
        if(err) throw err;
        //res.send("Record deleted "+ result);
        if(result.deletedCount>0){
            res.json({"msg":"Record deleted"});
        }else{
            res.json({"msg":"Record not present"});
        }
    })
}
module.exports = {GetCompanyFromDb,GetCompanyById, StoreCompanyInfo, UpdateCompanyInfo, DeleteCompanyInfo}