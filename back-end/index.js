const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

//Routes
warehouseRouter = require("./routes/warehouse.route");
app.use("/warehouses", warehouseRouter);
productRouter = require("./routes/product.route");
app.use("/products", productRouter);

//This function attempts to connect to our MongoDB database
const databaseConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connection successful!");
    } catch (err) {
        console.error(err);
        process.exit(1); //Kills the server if the connection fails
    }
};

databaseConnect();

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on Port ${process.env.PORT || 8080}`)
});

