const CompanyModel = require("../model/company.model.js");
var ProductModel = require("../model/product.model.js");

//Retrieve Product Details from Db

var GetProductFromDb = (req, res)=>{
    ProductModel.find({},(err,data)=>{
        if(err) throw err;

        res.json(data);

    })
};

var GetProductById = (req,res)=>{
    var idInfo = req.params.id;
    ProductModel.find({_id:idInfo},(err,data)=>{
        if(err) throw err;

        res.json(data);
    })
}

/*

{
    "pid":99,
    "pname":"thing",
    "price":2,
    "description":"xyz",
    "image":"link",
    "company":"HP"
}

*/
var StoreProductInfo = (req,res)=>{

    //find the company to get its ref id
    CompanyModel.findOne({cname: req.body.company},(err,data)=>{
        if(err) throw err;

        console.log("found company" + data);
        console.log(typeof data._id);

        var product = new ProductModel({
            _id:req.body.pid,
            pname:req.body.pname,
            price:req.body.price,
            description: req.body.description,
            image:req.body.image,
            company: data._id
             
        });

        console.log("saving");
        console.log(product);
        product.save((err,result)=> {
            if(err) throw err;
    
            //res.send("Record stored successfully in Db"+ result);
            res.json({"msg":"record saved succesfully"});
        })

    })


}

var UpdateProductInfo = (req,res) =>{
    console.log("update to db");
    //find the company to get its ref id
    CompanyModel.findOne({cname: req.body.company},(err,data)=>{
        if(err) throw err;

        console.log("found company" + data);
        console.log(typeof data._id);

        console.log("updating");

        ProductModel.update(
            {_id:req.body.pid},
            {$set:
                {
                    pname:req.body.pname,
                    price:req.body.price,
                    description: req.body.description,
                    image:req.body.image,
                    company: data._id
                }
            }, (err, result)=>{
            if(err) throw err;
            //res.send("Record updated...." + result);
            if(result.nModified>0){
                res.json({"msg":"Record updated"});
            }else{
                res.json({"msg":"Record not updated"});
            }
        })


    })
}

var DeleteProductInfo = (req, res)=>{
    console.log("Delete request");
    var deleteId = req.params.id;
    ProductModel.deleteOne({_id:deleteId},(err,result)=>{
        if(err) throw err;
        //res.send("Record deleted "+ result);
        if(result.deletedCount>0){
            res.json({"msg":"Record deleted"});
        }else{
            res.json({"msg":"Record not present"});
        }
    })
}
module.exports = {GetProductFromDb,GetProductById, StoreProductInfo, UpdateProductInfo, DeleteProductInfo}