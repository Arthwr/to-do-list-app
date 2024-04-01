export default class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.taskList = [];
  }
  addTaskToProject(task) {
    this.taskList.push(task);
  }
}
