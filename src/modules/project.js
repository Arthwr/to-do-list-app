import TaskManager from "./taskManager";

export default class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.taskManager = new TaskManager();
  }

  addProjectTask(task) {
    this.taskManager.pushTask(task);
  }
  removeProjectTask(taskId) {
    this.taskManager.removeTask(taskId);
  }
}
