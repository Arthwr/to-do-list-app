export default class TaskManager {
  #taskIdCounter = 0;

  constructor() {
    this.taskList = [];
  }

  assignTaskId(task) {
    task.id = this.#taskIdCounter++;
    return task;
  }
  pushTask(task) {
    this.taskList.push(task);
  }
  removeTask(taskId) {
    const index = this.taskList.findIndex((task) => task.id === taskId);
    if (index === -1) return null;
    this.taskList.splice(index, 1);
  }
}
