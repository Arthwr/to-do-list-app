import generateTaskID from "./idGenerator";

export default class Task {
  constructor(title, description, dueDate, priority) {
    this.id = generateTaskID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
