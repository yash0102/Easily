import JobModel from "../models/job.model.js";

export default class JobsController {
    getJobs(req, res) {
        let jobs = JobModel.get();
        res.render("jobs", {
            jobs: jobs,
            bgColor: "#0e0d23",
            userEmail: req.session.userEmail,
            userName: req.session.userName,
        });
    }

    getPostjobForm(req, res) {
        res.render("postjob", {
            bgColor: "white",
            userEmail: req.session.userEmail,
            userName: req.session.userName,
        })
    }

    postNewJob(req, res) {
        console.log("req.body newJob ",req.body);
        const {
            category,
            position,
            location,
            date,
            company,
            salary,
            numOfOpenings,
            skills
        } = req.body;

        // this is posted value as 29/9/2023 4:55:45 pm
        // const currentDate = new Date();
        // const formattedDate = currentDate.toLocaleDateString();
        // const formattedTime = currentDate.toLocaleTimeString();
        // const postedDate = `${formattedDate} ${formattedTime}`;

        // this will format a date as 30 Sep 2023
        let getDate = new Date(date);
        let options = { day: 'numeric', month: 'short', year: 'numeric' };
        let formatDate = new Intl.DateTimeFormat('en-IN', options).format(getDate);
        console.log(formatDate);  // Outputs: 30 Sep 2023
        JobModel.add(
            category,
            position,
            location,
            formatDate,
            company,
            salary,
            numOfOpenings,
            skills,
        );

        let jobs = JobModel.get();
        res.render("jobs", {
            jobs: jobs,
            bgColor: "#0e0d23",
            userEmail: req.session.userEmail,
            userName: req.session.userName,
        })
    }

    getJobProfileView(req, res) {
        // 1. if jobs exists then return view
        const id = req.params.id;
        const jobFound = JobModel.getById(id);
        if(jobFound){
            res.render("jobProfile", {
                jobs: jobFound,
                bgColor: "#fff",
                userEmail: req.session.userEmail,
                userName: req.session.userName,
            });
        }else {
            res.status(401).send('Product not found');
        }
    }

    getUpdateJobProfileView(req, res) {
        const id = req.params.id;
        const jobFound = JobModel.getById(id);
        if(jobFound){
            res.render("updateJobPage", {
                jobs: jobFound,
                bgColor: "#fff",
            });
        }else {
            res.status(401).send('Product not found');
        }
    }

    
    deleteJobs(req, res) {
        const id = req.params.id;
        const productFound = JobModel.getById(id);
        if(!productFound){
            return res.status(401).send("Product not found");
        }
        JobModel.delete(id);

        res.redirect("/jobs");
    }

}
