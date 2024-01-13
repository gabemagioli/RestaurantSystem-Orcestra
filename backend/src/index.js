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



/*FOOD CONTROLLER  - TUDO OK */ 

//post a new food - PRIVATE ROUTE
app.post("/food", async(req, res) => {
    const { name, description, price, nationality, image_url } = req.body;

    if(!name || !description || !price || !nationality || !image_url){
        return res.status(422).send("missing information");
    }

    const newFood = new Food({
        name,
        description,
        price,
        nationality,
        image_url
    });

    await newFood.save();
    res.status(200).send("Food registered: " + newFood);
})


//returns a list with all the foods in the menu (public)
app.get("/food", async(req, res) => {
    const foods = await Food.find()
    res.send(foods); //return a list with all the foods in the app
})

//returns the food by its id (public)
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

//deletes the food from the menu by its Id (private - ONLY ADMIN)
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

//registering a Client
app.post("/register/client", async (req, res) => {
    //receiving the parameters:
    const { name, email, password, role } = req.body;
    //check in DB if there's already a user with the same email
    if(await Client.findOne({ email: email })){//if it returns True there's a user with this email
        res.status(422).send("This email is already in use, choose another one");
    }
    //Client password:
    const passwordHash = await bcrypt.hash(password);

    //creating the client:
    const newClient = new Client({
        name,
        email,
        password: passwordHash,//saving the hashed password 
        role
        //maybe add an empty array in here
    });

    await newClient.save();//saving in DB
    res.status(200).send("Client succesfully registered");
});
//Login as client
app.post("/login/client", async(req, res) => {
    const { email, password } = req.body;

    const user = await Client.findOne({ email: email });
    if(!user){
        return res.status(422).send("User not found, check if you put the right informations or sing-up!");
    }

    if(!email || !password){
        return res.status(422).send("Empty field!");
    }

    const check = await bcrypt.compare(password, user.password);//comparing the passswords
    if(!check){
        return res.status(422).send("Incorrect password");
    }

    try {
        const secret = "22682275";//transferir para o .env depois - nao e boa pratica deixar urls, senhas expostas no codigo!!
        const token = jwt.sign({
            id:user.id,
        },
        secret,
        )

        res.status(200).send(token);
    }
    catch(error){
        res.status(500).send("Error");
    }
})








/*ADMIN CONTROLLER */

//delete method after creating the admin
app.post("/register/admin", async (req, res) => {
    //receiving the parameters:
    const { name, email, password, role } = req.body;
    //check in DB if there's already a user with the same email
    if(await Admin.findOne({ email: email })){//if it returns True there's a user with this email
        res.status(422).send("This email is already in use, choose another one");
    }
    //Client password:
    const passwordHash = await bcrypt.hash(password);

    //creating the client:
    const newAdmin = new Admin({
        name,
        email,
        password: passwordHash,//saving the hashed password 
        role
        //maybe add an empty array in here
    });

    await newAdmin.save();//saving in DB
    res.status(200).send("Client succesfully registered");
})

//login as admin:
app.post("/login/admin", async(req, res) => {
    const { email, password } = req.body;

    const user = await Admin.findOne({ email: email });
    if(!user){
        return res.status(422).send("User not found, check if you put the right informations or sing-up!");
    }

    if(!email || !password){
        return res.status(422).send("Empty field!");
    }

    const check = await bcrypt.compare(password, user.password);//comparing the passswords
    if(!check){
        return res.status(422).send("Incorrect password");
    }

    try {
        const secret = "22682275";//transferir para o .env depois - nao e boa pratica deixar urls, senhas expostas no codigo!!
        const token = jwt.sign({
            id:user.id,
        },
        secret,
        )

        res.status(200).send(token);
    }
    catch(error){
        res.status(500).send("Error");
    }
})







app.listen(port, () => {
    mongoose.connect("mongodb+srv://user:user@cluster0.6pcqhjq.mongodb.net/?retryWrites=true&w=majority");//put the user and password in variables in the .env file and import it to here
    console.log("Running on port 8080");
})