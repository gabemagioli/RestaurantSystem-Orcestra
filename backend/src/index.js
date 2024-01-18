const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
const port = 8080;

//database models:
const Food = require("./models/Food");
const Client = require("./models/Client");
const Admin = require("./models/Admin");

app.use(cors());

//checking if jwt token is valid
function checkJWT(req, res, next){//working, its making the validation
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).send("Unable to execute this");
    }

    try {

        const secret =  "22682275";//colocar secret no .env depois
        jwt.verify(token, secret);
        next();
    }
    catch(err) {
        res.status(400).send("Token isn't valid");
    }
}

/*FOOD CONTROLLER  - TUDO OK */ 

//post a new food - PRIVATE ROUTE - TESTED OK 
app.post("/food", checkJWT, async(req, res) => {
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


//returns a list with all the foods in the menu (public) - TESTED OK
app.get("/food", async(req, res) => {
    const foods = await Food.find()
    res.send(foods); //return a list with all the foods in the app
})

//returns the food by its id (public) - TESTED OK
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

//deletes the food from the menu by its Id (private - ONLY ADMIN) - TESTED OK
app.delete("/food/:id", checkJWT, async(req, res) => {
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

//registering a Client - TESTED OK
app.post("/register/client", async (req, res) => {
    // parameters
    const { name, email, password, role } = req.body;

    // checking if a user is already using the email
    if (await Client.findOne({ email: email })) {
        res.status(422).send("This email is already in use, choose another one");
    }

    try {
        //generating the hash
        const passwordHash = await bcrypt.hash(password, 10);

        
        const newClient = new Client({
            name,
            email,
            password: passwordHash,
            role,
            italyMedal: 0,
            brazilMedal: 0,
            japanMedal: 0,
            thailandMedal: 0,
            arabMedal: 0,
            franceMedal: 0
        });

        // Save in db
        await newClient.save();
        res.status(200).send("Client successfully registered");
    } catch (error) {
        console.error("Error registering client:", error);
        res.status(500).send("Internal Server Error");
    }
});

//Login as client - TESTED OK
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
// counting medals and saving the updates: -> method called on shopping cart checkout (probably will be a private route only for clients - needs to be a client to buy products) (check if its implemented right)
app.put("/medal/:id", async(req, res) => {
    const userId = req.params.id;
    const user = await Client.replaceOne({_id:userId}, req.body);//inthe body the front end will give the updated number of medals
    res.status(200).send(user);
})
//returns client information - TESTED 
app.get("/client/:id", async(req, res) => {
    const userId = req.params.id;
    const user = await Client.findById(userId);

    res.status(200).send(user);
})
//return all clients (maybe it isnt needed) - TESTED
app.get("/client", async(req, res) => {
    const clients = await Client.find();
    res.send(clients);
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