import express from "express";
import layouts from "express-ejs-layouts";
import path from "path";
import HomeController from "./src/controllers/homeController.js";

const app = express();

// setup view engine
app.use(layouts);
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));

// Create instance of a controller
const homeController = new HomeController();

app.get("/",homeController.getHome);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});