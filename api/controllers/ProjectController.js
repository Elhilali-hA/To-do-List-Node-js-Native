import User from "./UserController"
export default class Project {

    constructor(id, title, desc, date) {
        this.id = id
        this.title = title
        this.desc = desc
        this.date = date
        this.Userid = User.id
        this.Tasks = []
    }
}


