export default class AppController {
  static screenController;
  static project;
  static task;

  // prettier-ignore
  static init(screenControllerInstance, projectInstance, taskInstance) {
    AppController.screenController = screenControllerInstance;
    AppController.project = projectInstance;
    AppController.task = taskInstance;

    const projectSubmitBtn = document.getElementById("p-submit-btn");
    projectSubmitBtn.addEventListener("click", () => AppController.handleSubmit(e, 'project'));

    const taskSubmitBtn = document.getElementById("t-submit-btn");
    taskSubmitBtn.addEventListener("click", () => AppController.handleSubmit(e, 'task'));
  }

  // prettier-ignore
  static handleSubmit(event, type) {
    event.preventDefault();
    const formData = AppController.screenController.getFormData();
    const newItem = new (type === 'project' ? this.project : this.task)(formData);
    AppController.screenController.renderItem(newItem);
  }
}
