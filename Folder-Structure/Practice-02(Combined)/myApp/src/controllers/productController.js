const ProductModel = require('../models/ProductsModel');


// Create Product
exports.createProduct = (req, res) => {
    let reqBody = req.body;
    ProductModel.create(reqBody)
        .then(data => {
            res.status(200).json({
                status: "Success",
                data: data
            });
        })
        .catch(err => {
            res.status(400).json({
                status: "Fail",
                data: err
            });
        });
};


//Read Product
exports.readProduct = (req, res) => {
    let query = {};
    let projection = {};
   
    ProductModel.find(query, projection)
    .then(data => {
        res.status(200).json({
            status: "Success",
            data: data
        });
    })
    .catch(err => {
        res.status(400).json({
            status: "Fail",
            data: err
        });
    });
}


//Update Product
// exports.updateProduct = (req, res) => {
//     let id = req.param.id;
//     let query = {_id: id};

//     let updateData = req.body;
   
//     ProductModel.updateOne(query, updateData)
//     .then(data => {
//         res.status(200).json({
//             status: "Success",
//             data: data
//         });
//     })
//     .catch(err => {
//         res.status(400).json({
//             status: "Fail",
//             data: err
//         });
//     });
// }



exports.updateProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let query = { _id: id };
        let updateData = req.body;

        let data = await ProductModel.updateOne(query, updateData);

        res.status(200).json({
            status: "Success",
            data: data
        });
    } catch (err) {
        console.error("Update Error:", err);
        res.status(400).json({
            status: "Fail",
            data: err
        });
    }
}


//Delete Product
exports.deleteProduct = (req, res) => {
    let id = req.params.id;
    let query = {_id: id};
   
    ProductModel.deleteOne(query)
    .then(data => {
        res.status(200).json({
            status: "Success",
            data: data
        });
    })
    .catch(err => {
        res.status(400).json({
            status: "Fail",
            data: err
        });
    });
}