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

    // Render existing projects on load
    const projects = AppController.project.getAllProjects();
    projects.forEach(project => AppController.screenController.assignProjectTab(project));

    // Project form call button
    const projectCreateBtn = document.getElementById("p-create-btn");
    projectCreateBtn.addEventListener("click", () => AppController.screenController.renderProjectForm());


    // Event listeners for project & task buttons
    // const projectSubmitBtn = document.getElementById("p-submit-btn");
    // projectSubmitBtn.addEventListener("click", () => AppController.handleSubmit(e, 'project'));
    
    // const taskSubmitBtn = document.getElementById("t-submit-btn");
    // taskSubmitBtn.addEventListener("click", () => AppController.handleSubmit(e, 'task'));
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
    AppController.assignProjectTab(newProject);
  }

  //prettier-ignore
  static assignProjectTab(project) {
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
