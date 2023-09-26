import express from "express";
import layouts from "express-ejs-layouts";
import path from "path";
import HomeController from "./src/controllers/homeController.js";
import JobsController from "./src/controllers/jobsController.js";
import RecuiterController from "./src/controllers/recuiterController.js";

const app = express();
app.use(express.static("public"));

// parse form data
app.use(express.urlencoded({extended: true}));

// setup view engine
app.use(layouts);
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));

// Create instance of a controller
const homeController = new HomeController();
const jobController = new JobsController();
const recuiterController = new RecuiterController();

app.get("/",homeController.getHome);
app.post("/register", recuiterController.postRegister);
app.get("/login", recuiterController.getLogin);
// app.post("/login", recuiterController.postLogin);
app.get("/jobs",jobController.getJobs);
app.get("/jobs/:id",jobController.getJobProfile);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});