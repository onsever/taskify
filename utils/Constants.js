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
    new Task("Task 1", "Description 1", "2022-11-24", "2022-11-02", false),
    new Task("Task 2", "Description 2", "2022-11-23", "2022-11-02", false),
    new Task("Task 3", "Description 3", "2022-11-26", "2022-11-02", false),
    new Task("Task 4", "Description 4", "2022-11-24", "2022-11-02", false),
  ];
}
