import TaskManager from "./taskManager";

export default class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.taskManager = new TaskManager();
  }

  addProjectTask(task) {
    const newTask = this.taskManager.assignTaskId(task);
    this.taskManager.pushTask(newTask);
  }
  removeProjectTask(taskId) {
    this.taskManager.removeTask(taskId);
  }
}
  