const Product = require("../models/Product.model");

//Obtains all products in our database
const getAllProducts = async () => {
    const product = await Product.find();
    return product;
}

//Looks for a product using its unique mongoDB
//DEV NOTE: Consider adding ways to search by product number or name
const getProductByID = async id => {
    try {
        const product = await Product.findById(id);

        if (product == null) {throw {status: 204, msg: "Product not found"}}

        return product;
    } catch(err) {
        throw err;
    }
}

//Create a new product
//DEV NOTE: Currently, there is no validation implemented for creates
const createProduct = async productDetails => {
    try {
        product = new Product(productDetails);
        await product.save();
        return product;
    }
    catch(err) {
        throw err;
    }
}

module.exports = { getAllProducts, getProductByID, createProduct };