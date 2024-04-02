import generateTaskID from "./idGenerator";

// prettier-ignore
export default class Task {
  constructor(title, description, dueDate, priority, idGenerator = generateTaskID) {
    this.id = idGenerator();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
