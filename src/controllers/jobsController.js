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

    getJobProfile(req, res) {
        res.render("jobProfile", {
            bgColor: "#fff",
            userEmail: req.session.userEmail,
            userName: req.session.userName,
        })
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

        JobModel.add(
            category,
            position,
            location,
            date,
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

}
