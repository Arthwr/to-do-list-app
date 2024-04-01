import TaskManager from "./taskManager";

export default class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.taskManager = new TaskManager();
  }

  addTask(task) {
    const newTask = this.taskManager.assignTaskId(task);
    this.taskManager.addTask(newTask);
  }
  removeTask(taskId) {
    this.taskManager.removeTask(taskId);
  }
}
