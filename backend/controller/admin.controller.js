var AdminModel = require("../model/admin.model.js");

//Retrieve Admin Details from Db

var GetAdminFromDb = (req, res)=>{
    AdminModel.find({},(err,data)=>{
        if(err) throw err;

        res.json(data);

    })
};

var GetAdminById = (req,res)=>{
    var idInfo = req.params.id;
    AdminModel.find({_id:idInfo},(err,data)=>{
        if(err) throw err;

        res.json(data);
    })
}

var StoreAdminInfo = (req,res)=>{
    let Admin = new AdminModel({
        _id:req.body.id,
        uname:req.body.uname,
        password:req.body.password

    });
    console.log("saving");
    Admin.save((err,result)=> {
        if(err) throw err;

        //res.send("Record stored successfully in Db"+ result);
        res.json({"msg":"record saved succesfully"});
    })

}

var UpdateAdminInfo = (req,res) =>{
    var updateId = req.body.id;
    var updateuName = req.body.uname;
    var updatePassword = req.body.password;
    AdminModel.update({_id:updateId},{$set:{pname:updateuName, price:updatePassword}}, (err, result)=>{
        if(err) throw err;
        //res.send("Record updated...." + result);
        if(result.nModified>0){
            res.json({"msg":"Record updated"});
        }else{
            res.json({"msg":"Record not updated"});
        }
    })
}

var DeleteAdminInfo = (req, res)=>{
    var deleteId = req.params.id;
    AdminModel.deleteOne({_id:deleteId},(err,result)=>{
        if(err) throw err;
        //res.send("Record deleted "+ result);
        if(result.deletedCount>0){
            res.json({"msg":"Record deleted"});
        }else{
            res.json({"msg":"Record not present"});
        }
    })
}
module.exports = {GetAdminFromDb,GetAdminById, StoreAdminInfo, UpdateAdminInfo, DeleteAdminInfo}