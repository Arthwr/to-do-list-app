import TaskManager from "./taskManager";

export default class Project {
  static #projectsArray = [];

  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.taskManager = new TaskManager();
    Project.#projectsArray.push(this);
  }

  getAllProjects() {
    return Project.#projectsArray;
  }

  addProjectTask(task) {
    this.taskManager.pushTask(task);
  }
  removeProjectTask(taskId) {
    this.taskManager.removeTask(taskId);
  }
}
