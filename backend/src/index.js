const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
const port = 8080;

//database models:
const Food = require("./models/Food");
const Client = require("./models/Client");
const Admin = require("./models/Admin");



/*FOOD CONTROLLER*/

//admin can add a new food in the system (private - ONLY ADMIN)
app.post("/food", async (req, res) => {
    const food = new Food({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        nationality: req.body.nationality,
        image_url: req.body.image_url
    })

    await food.save();//saves in database

    res.send(food);//sends as a response a JSON of the added food
})

//returns a list with all the foods in the menu (public)
app.get("/food", async(req, res) => {
    const foods = await Food.find()
    res.send(foods); //return a list with all the foods in the app
})
//returns the food by it's id (public)
app.get("/food/:id", async(req, res) => {
   try{
        const foodId = req.params.id;
        const food = await Food.findById(foodId);
        res.send(food);
   }
   catch(error){
        res.status(404).send("plate of food not found, check if you inserted an existent Id");
   }
})
//deletes the food from the menu by it's Id (private - ONLY ADMIN)
app.delete("/food/:id", async(req, res) => {
    try {
        const foodId = req.params.id;
        const food = await Food.findByIdAndDelete(foodId);
        res.send("You deleted the plate from your Menu! " + food);
    }
    catch(error){
        res.status(404).send("The food you were trying to delete wasn't found, check if the right Id was given.");
    }
})

/* CLIENT CONTROLLER */

app.post("/register/client", async (req, res) => {
    const newClient = new Client({
        name: req.body.name,
        email: req.body.email,
        password: req.boddy.password,
        role: req.body.role
        //maybe add an empty array in here
    })


})


/*ADMIN CONTROLLER */

app.post("/register/admin", async (req, res) => {
    const newAdmin = new Admin({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role: req.body.role
    })
})



app.listen(port, () => {
    mongoose.connect("mongodb+srv://user:user@cluster0.6pcqhjq.mongodb.net/?retryWrites=true&w=majority");//put the user and password in variables in the .env file and import it to here
    console.log("Running on port 8080");
})