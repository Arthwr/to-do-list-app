export default class AppController {
  static screenController;
  static project;
  static taskManager;
  static task;

  // prettier-ignore
  static init(screenControllerInstance, projectInstance, taskManagerInstance, taskInstance) {
    AppController.screenController = screenControllerInstance;
    AppController.project = projectInstance;
    AppController.taskManager = taskManagerInstance;
    AppController.task = taskInstance;

    const projects = AppController.project.getAllProjects();
    projects.forEach(project => AppController.screenController.assignProjectTabListener(project));

    const projectSubmitBtn = document.getElementById("p-submit-btn");
    projectSubmitBtn.addEventListener("click", () => AppController.handleSubmit(e, 'project'));
    const taskSubmitBtn = document.getElementById("t-submit-btn");
    taskSubmitBtn.addEventListener("click", () => AppController.handleSubmit(e, 'task'));
  }

  static createNewTask(formData) {
    const newTask = new AppController.task(
      formData.title,
      formData.description,
      formData.dueDate,
      formData.priority
    );
    AppController.project.addProjectTask(newTask);
  }

  //prettier-ignore
  static createNewProject(formData) {
    const newProject = new AppController.project(formData.title, formData.description);
    AppController.assignProjectTabListener(newProject);
  }

  //prettier-ignore
  static assignProjectTabListener(project) {
    const projectTab = AppController.screenController.renderProjectTitle(project);
    projectTab.addEventListener("click", () => AppController.screenController.renderProjectPage(project));
  }

  static handleSubmit(event, type) {
    event.preventDefault();
    const formData = AppController.screenController.getFormData();
    if (type === "project") {
      AppController.createNewProject(formData);
    } else if (type === "task") {
      AppController.createNewTask(formData);
    }
  }
}
