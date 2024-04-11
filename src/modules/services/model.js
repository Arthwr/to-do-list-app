import generateTaskID from "../utilities/idGenerator";

export class Project {
    static #projectsArray = [];
  
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.taskManager = new TaskManager();
      Project.#projectsArray.push(this);
    }
  
    static getAllProjects() {
      return Project.#projectsArray;
    }
  
    addProjectTask(task) {
      this.taskManager.pushTask(task);
    }
    removeProjectTask(taskId) {
      this.taskManager.removeTask(taskId);
    }
  }

export class Task {
    constructor(title, description, dueDate, priority, idGenerator = generateTaskID) {
      this.id = idGenerator();
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
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
    getTaskById(taskId) {
      const taskList = this.getTaskList();
      const resultTask = taskList.find((task) => task.id == taskId);
      return resultTask;
    }
  }