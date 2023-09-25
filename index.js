import express from "express";
import layouts from "express-ejs-layouts";
import path from "path";
import HomeController from "./src/controllers/homeController.js";
import JobsController from "./src/controllers/jobsController.js";

const app = express();
app.use(express.static("public"));

// setup view engine
app.use(layouts);
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));

// Create instance of a controller
const homeController = new HomeController();
const jobController = new JobsController();

app.get("/",homeController.getHome);
app.get("/jobs",jobController.getJobs);
app.get("/jobs/:id",jobController.getJobProfile);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});