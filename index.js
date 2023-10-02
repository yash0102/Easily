import express from "express";
import layouts from "express-ejs-layouts";
import path from "path";
import HomeController from "./src/controllers/homeController.js";
import JobsController from "./src/controllers/jobsController.js";
import RecuiterController from "./src/controllers/recuiterController.js";
import session from "express-session";
import { auth } from "./src/middlewares/auth.middleware.js";
import cookieParser from "cookie-parser";
import { setLastVisit } from "./src/middlewares/lastVisit.middleware.js";
import { uploadFile } from "./src/middlewares/fileUpload.middleware.js";

const app = express();
app.use(express.static("public"));
app.use("/jobs/applicants/uploads", express.static("uploads"));
app.use(cookieParser());

// setup express session
app.use(
    session({
        secret: "SecretKey",
        resave: false, // regenerate session id
        saveUninitialized: true, // save even session is empty
        cookie: { secure: false }, // using http,its not secure so false
    })
);

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
app.post("/login", recuiterController.postLogin);
app.get("/logout", recuiterController.logout);
app.get("/postjob", jobController.getPostjobForm);
app.post("/postjob", jobController.postNewJob);
app.get("/jobs",jobController.getJobs);
app.get("/jobs/:id",setLastVisit, jobController.getJobProfileView);
app.post("/apply/:id", uploadFile.single('resume'), jobController.postApplyJobs);
app.get("/jobs/applicants/:id", jobController.getViewApplicants);
app.get("/jobs/update/:id", jobController.getUpdateJobProfileView);
app.post("/jobs/:id", jobController.postUpdateJobProfileView);
app.post("/jobs/delete/:id", jobController.deleteJobs);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});