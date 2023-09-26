import UserModel from "../models/userModel.js";

export default class RecuiterController {

    getLogin(req, res) {
        res.render("login", {
            bgColor: "white",
        });
    }

    postRegister(req,res) {
        console.log("Recuiter Controller body : ",req.body);
        const {name, email, password } = req.body;
        UserModel.add(name, email, password );
        res.status(200).redirect("/login");
    }


}
