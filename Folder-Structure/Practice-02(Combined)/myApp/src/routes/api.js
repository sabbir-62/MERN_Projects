const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//api endpoints
router.post("/createProduct", productController.createProduct);

router.get("/readProduct", productController.readProduct);

router.post("/updateProduct/:id", productController.updateProduct);

router.get("/deleteProduct/:id", productController.deleteProduct);



module.exports = router;