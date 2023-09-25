export default class JobsController {
    getJobs(req, res) {
        res.render("jobs", {
            bgColor: "#0e0d23",
        });
    }
}
