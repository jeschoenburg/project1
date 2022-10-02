//This is the data model for a Product document
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//DEV NOTE: Consider adding validation logic
const productSchema = new Schema ({
    name: String, //Name of product
    number: Number, //Unique product number
    category: String, 
    space: Number, //Warehouse space taken by the product (in abstract units)
    price: Number,
    description: String //A detailed description of the product
});

const Product = mongoose.model('Product', productSchema, 'Products');
module.exports = Product;