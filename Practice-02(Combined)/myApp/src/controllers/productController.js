const ProductModel = require('../models/ProductsModel');


// Create Product
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


//Read Product
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


//Update Product
exports.updateProduct = (req, res) => {
    let id = req.param.id;
    let query = {_id: id};
   
    ProductModel.updateOne(query, (err, data) => {
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


//Delete Product
exports.deleteProduct = (req, res) => {
    let id = req.param.id;
    let query = {_id: id};
   
    ProductModel.remove(query, (err, data) => {
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