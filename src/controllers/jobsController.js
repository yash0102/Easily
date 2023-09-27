export default class JobsController {
    getJobs(req, res) {
        res.render("jobs", {
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
}
