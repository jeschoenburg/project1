//This is the data model for a Warehouse document

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//DEV NOTE: Consider adding validation logic
const warehouseSchema = new Schema ({
    name: String, //Name of warehouse
    number: Number, //Unique warehouse number
    location: {
        address: String,
        city: String,
        state: String,
        zip: String
    },
    max_capacity: Number, //Capacity will be represented in abstract units
    current_capacity: Number,
    inventory: [{
        //product: Product,
        //quantity: Number,
        //Total_Price: Number,
        //Total_Space: Number
    }]
});

const Warehouse = mongoose.model('Warehouse', warehouseSchema, 'Warehouses');
module.exports = Warehouse;