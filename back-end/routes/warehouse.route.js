//Router file for CRUD operations on warehouses

const router = require('express').Router();

const { default: mongoose } = require('mongoose');
//This will import each of the functions from the controller file
const { getAllWarehouses, getWarehouseByID, createWarehouse} = require('../controllers/warehouse.controller');

//Get all warehouses
router.get('/', async (request, response) => {
    const warehouse = await getAllWarehouses();
    return response.json(warehouse);
})

//Get a specific warehouse
router.get('/:id', async (request, response) => {
    try { 
        //Makes sure the Id being passed in is valid
        if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
            throw {status: 400, msg: "Invalid Id"}
        }

        const warehouse = await getWarehouseByID(request.params.id);
        response.json(warehouse);
    } catch(err) {
        //No product with that id was found
        response.status(err?.status).json(err);
    }
})

//Add product to warehouse

//Remove product from warehouse

//Create a warehouse
router.post('/', async (request, response) => {
    try {
        const warehouse = await createWarehouse(request.body);
        response.status(201).json(warehouse)
    } catch(err) {
        response.status(err?.status ?? 500).json(err);
    }
})

//Delete a warehouse

module.exports = router;