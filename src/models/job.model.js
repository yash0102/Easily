export default class JobModel {
    constructor(id, category, position, location, date, company, salary, numOfOpenings, skills) {
    this.id = id;
    this.category=category ;
    this.position = position;
    this.location = location;
    this.date = date;
    this.company = company;
    this.salary = salary;
    this.numOfOpenings = numOfOpenings;
    this.skills = skills
    }
  // static is methods can be accessed directly on the class without needing to create an instance.
    static get() {
        return jobs;
    }

    static delete(id) {
        const index = jobs.findIndex( p => p.id == id);
        jobs.splice(index,1);
    }

    static add(category, position, location, date, company, salary, numOfOpenings, skills){
        let newJob = new JobModel(
            jobs.length + 1,
            category,
            position,
            location,
            date,
            company,
            salary,
            numOfOpenings,
            skills
        );
        jobs.push(newJob);
    }

    static getById(id) {
        return products.find((job) => job.id == id);
    }
}


var jobs = [
    new JobModel(
        1,
        "Tech",
        "SDE",
        "Gurgaon HR IND Remote",
        "30-09-2023",
        "Coding Ninjas",
        "14 - 20",
        3,
        ["React", "NodeJs", "JS", "SQL", "MongoDB", "Express", "AWS"]
    ),
    new JobModel(
        1,
        "Tech",
        "SDE",
        "Gurgaon HR IND Remote",
        "30-09-2023",
        "Coding Ninjas",
        "14 - 20",
        3,
        ["React", "NodeJs", "JS", "SQL", "MongoDB", "Express", "AWS"]
    ),
    new JobModel(
        1,
        "Tech",
        "SDE",
        "Gurgaon HR IND Remote",
        "30-09-2023",
        "Coding Ninjas",
        "14 - 20",
        3,
        ["React", "NodeJs", "JS", "SQL", "MongoDB", "Express", "AWS"]
    ),
];