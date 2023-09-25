export default class HomeController {
    getHome (req, res) {
        res.render("home", {
            bgColor: "#181642",
        });
    }
}