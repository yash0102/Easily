export default class JobApplyModel {
    constructor(id, name, email, contact, resume) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.resume = resume;
    }

    static get() {
        return users;
    }

    static add(id, name, email, contact, resume) {
        const newUser = new JobApplyModel( id, name, email, contact, resume);
        users.push(newUser);
    }

    static getById (id) {
        const user = users.filter((u) => u.id === id);
        let userLength = user.length;
        return { user, userLength }
    }
}

var users = [
    new JobApplyModel(
        1,
        "yashwant",
        "yashsonkar0102@gmail.com",
        6264462744,
        "uploads/1696167019512-Yashwant_Sonkar_CV.pdf"
    ),
];