//Router file for CRUD operations on products

const router = require('express').Router();

const { default: mongoose } = require('mongoose');
//This will import each of the functions from the controller file
const { getAllProducts, getProductByID, createProduct} = require('../controllers/product.controller');

//Get all products
router.get('/', async (request, response) => {
    const product = await getAllProducts();
    return response.json(product);
})

//Get specific product
router.get('/:id', async (request, response) => {
    try { 
        //Makes sure the Id being passed in is valid
        if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
            throw {status: 400, msg: "Invalid Id"}
        }

        const product = await getProductByID(request.params.id);
        response.json(product);
    } catch(err) {
        //No product with that id was found
        response.status(err?.status).json(err);
    }
})

//Create a new product
router.post('/', async (request, response) => {
    try {
        const product = await createProduct(request.body);
        response.status(201).json(product)
    } catch(err) {
        response.status(err?.status ?? 500).json(err);
    }
})

//Change properties of a product
//This will require going through all warehouses and updating the products there

//Delete a product
//This will require going through all warehouses and deleting the products there

module.exports = router;