const ProductModel = require('../models/ProductsModel');


exports.createProduct = (req, res) => {
    let reqBody = req.body;
    ProductModel.create(reqBody, (err, data) => {
        if(err){
            res.status(400).json({
                status: "Fail",
                data: err
            })
        }
        else{
            res.status(200).json({
                status: "Success",
                data: data
            })
        }
    })
}

exports.readProduct = (req, res) => {
    let query = {};
    let projection = {};
   
    ProductModel.find(query, projection, (err, data) => {
        if(err){
            res.status(400).json({
                status: "Fail",
                data: err
            })
        }
        else{
            res.status(200).json({
                status: "Success",
                data: data
            })
        }
    })
}