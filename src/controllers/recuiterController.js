import JobModel from "../models/job.model.js";
import UserModel from "../models/userModel.js";

export default class RecuiterController {

    getLogin(req, res) {
        res.render("login", {
            bgColor: "white",
            userEmail: req.session.userEmail,
            userName: req.session.userName,
        });
    }

    postRegister(req,res) {
        const {name, email, password } = req.body;
        UserModel.add(name, email, password );
        res.status(200).redirect("/login");
    }

    postLogin (req, res) {
        const { email, password } = req.body;
        const user = UserModel.isValidUser(email, password);
        if (!user) {
            return res.redirect("/login");
        }
        req.session.userEmail = email;
        req.session.userName = user.name;
        // return res.redirect("/jobs");
        let jobs = JobModel.get();
        return res.render("jobs", {
            jobs: jobs,
            bgColor: "#0e0d23",
            userEmail: req.session.userEmail,
            userName: req.session.userName,
        });
    }

    logout(req, res) {
        // on logout , destroy the session
        req.session.destroy((err) => {
            if(err) {
                console.log(err);
            } else {
                res.redirect('/login');
            }
        })
        res.clearCookie('lastVisit');
    }

}
