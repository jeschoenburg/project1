const Warehouse = require("../models/Warehouse.model");

//Obtains all warehouses in our database
const getAllWarehouses = async () => {
    const warehouse = await Warehouse.find();
    return warehouse;
}

//Obtains a specific warehouse
const getWarehouseByID = async id => {
    try {
        const warehouse = await Warehouse.findById(id);

        if (warehouse == null) {throw {status: 204, msg: "Product not found"}}

        return warehouse;
    } catch(err) {
        throw err;
    }
}

//Create a new warehouse
//DEV NOTE: Currently, there is no validation implemented for creates
const createWarehouse = async warehouseDetails => {
    try {
        warehouse = new Warehouse(warehouseDetails);
        await warehouse.save();
        return warehouse;
    }
    catch(err) {
        throw err;
    }
}
module.exports = {getAllWarehouses, getWarehouseByID, createWarehouse};