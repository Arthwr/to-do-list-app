export default class TaskManager {
  #tasksArray = [];

  getTaskList() {
    return this.#tasksArray;
  }

  pushTask(task) {
    this.#tasksArray.push(task);
  }
  removeTask(taskId) {
    const index = this.#tasksArray.findIndex((task) => task.id === taskId);
    if (index === -1) return null;
    this.#tasksArray.splice(index, 1);
  }
}
