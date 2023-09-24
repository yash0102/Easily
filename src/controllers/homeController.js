export default class HomeController {
    getHome (req, res) {
        res.render("home",{
            title: "Home Page",
        });
    }
}