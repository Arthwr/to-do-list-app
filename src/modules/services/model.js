import generateId from "../utilities/idGenerator";

export class Project {
  static #projectsArray = [];

  constructor({title, description, id = null}) {
    this.title = title;
    this.description = description;
    this.id = id !== null ? id : generateId(); // Use provided id if available, generate new one otherwise.
    this.taskManager = new TaskManager();
    Project.#projectsArray.push(this);
  }

  static getAllProjects() {
    return Project.#projectsArray;
  }

  static removeProject(projectId) {
    const index = this.#projectsArray.findIndex(
      (project) => project.id == projectId
    );
    if (index === -1) return null;
    this.#projectsArray.splice(index, 1);
  }

  addProjectTask(task) {
    this.taskManager.pushTask(task);
  }
  
  removeProjectTask(taskId) {
    this.taskManager.removeTask(taskId);
  }

  serialize() {
    return {
      title: this.title,
      description: this.description,
      id: this.id,
      taskList: this.taskManager.serialize(),
    };
  }
}

export class Task {
  constructor({title, description, dueDate, priority, id = null}) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = id !== null ? id : generateId(); // Use provided id if available, generate new one otherwise.
  }

  serialize() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      id: this.id,
    };
  }
}

export class TaskManager {
  #tasksArray = [];

  getTaskList() {
    return this.#tasksArray;
  }

  pushTask(task) {
    this.#tasksArray.push(task);
  }

  removeTask(taskId) {
    const index = this.#tasksArray.findIndex((task) => task.id == taskId);
    if (index === -1) return null;
    this.#tasksArray.splice(index, 1);
  }

  serialize() {
    return this.#tasksArray.map((task) => task.serialize());
  }
}
