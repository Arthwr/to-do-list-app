export default class TaskManager {
  #taskList = [];

  pushTask(task) {
    this.#taskList.push(task);
  }
  removeTask(taskId) {
    const index = this.#taskList.findIndex((task) => task.id === taskId);
    if (index === -1) return null;
    this.#taskList.splice(index, 1);
  }
}
