export default class HomeController {
    getHome (req, res) {
        res.render("home",{
            title: "Home Page",
        });
    }

    get404 (req, res) {
        res.render("404",{
            title: "Not Found"
        });
    }
}