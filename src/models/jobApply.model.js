export default class JobApplyModel {
    constructor(id, name, email, contact, resume) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.resume = resume;
    }

    static add(name, email, contact, resume) {
        const newUser = new JobApplyModel(users.length + 1, name, email, contact, resume);
        users.push(newUser);
    }
}

var users = [];