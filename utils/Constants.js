import uuid from "react-uuid";

class Task {
    constructor(name, description, startDate, endDate, completed) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.completed = completed;
        this.id = uuid();
    }

    setTeamMembers(teamMembers) {
        this.teamMembers = teamMembers;
    }
}

export default class Constants {
    constructor() {}
    static dummyData = [
        new Task("Task 1", "Description 1", 1, "2021-01-01", "2021-01-02", false),
        new Task("Task 2", "Description 2", 2, "2021-01-01", "2021-01-03", false),
        new Task("Task 3", "Description 3", 3, "2021-01-01", "2021-01-04", false),
        new Task("Task 4", "Description 4", 4, "2021-01-01", "2021-01-05", false),
    ];
}