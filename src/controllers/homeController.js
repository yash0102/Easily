export default class HomeController {
    getHome (req, res) {
        res.render("home", {
            bgColor: "#181642",
            userEmail: req.session.userEmail,
            userName: req.session.userName,
        });
    }
}