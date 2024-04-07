import getFormData from "../utilities/getFormData";

export default class AppController {
  static screenController;
  static project;
  static taskManager;
  static task;
  static currentProject = null;

  // prettier-ignore
  static init(screenControllerInstance, projectInstance, taskManagerInstance, taskInstance) {
    AppController.screenController = screenControllerInstance;
    AppController.project = projectInstance;
    AppController.taskManager = taskManagerInstance;
    AppController.task = taskInstance;

    // Render existing projects on load
    const projects = AppController.project.getAllProjects();
    projects.forEach(project => AppController.screenController.assignProjectTab(project));

    // Project form create button
    const projectCreateBtn = document.querySelector(".p-create-btn");
    projectCreateBtn.addEventListener("click", () => AppController.screenController.renderForm("project"));

    // Task form create button
    document.addEventListener("click", (e) => {
      if (e.target.matches(".t-create-btn")) {
        e.preventDefault();
        AppController.screenController.renderForm("task");
      }
    })

    // Event listeners for project & task form buttons
    document.addEventListener("submit", (e) => {
      if(e.target.matches(".form")) {
        e.preventDefault();
        AppController.handleFormSubmission(e, e.target);
        const form = e.target;
        AppController.closeModalForm(e, form);
      }
    })

    document.addEventListener("click", (e) => {
      if (e.target.matches(".p-form-cancel")) {
        e.preventDefault();
        const form = e.target.closest(".form");
        AppController.closeModalForm(e, form);
      }
    })

    document.addEventListener("click" , (e) => {
      if (e.target.matches(".t-submit-btn")) {
        e.preventDefault();
        AppController.handleFormSubmission(e, "task");
      }
    })
  }

  static closeModalForm(event, form) {
    event.preventDefault();
    const overlay = document.querySelector(".bg-overlay");
    form.remove();
    overlay.remove();
  }

  static setCurrentProject(project) {
    this.currentProject = project;
  }

  //prettier-ignore
  static assignProjectTab(project) {
    const projectTab = AppController.screenController.renderProjectTitle(project);
    projectTab.addEventListener("click", () => {
      AppController.screenController.renderProjectPage(project);
      AppController.setCurrentProject(project);
    });
  }

  //prettier-ignore
  static createNewProject(formData) {
    const newProject = new AppController.project(formData.title, formData.description);
    AppController.assignProjectTab(newProject);
  }

  static createNewTask(formData) {
    const newTask = new AppController.task(
      formData.title,
      formData.description,
      formData.dueDate,
      formData.priority
    );
    const project = AppController.currentProject;
    project.addProjectTask(newTask);
    AppController.screenController.renderTask(formData);
  }

  static handleFormSubmission(event, formElement) {
    event.preventDefault();
    const formData = getFormData(formElement);
    const formType = formElement.id === "project-form" ? "project" : "task";

    if (formType === "project") {
      AppController.createNewProject(formData);
    } else if (formType === "task") {
      AppController.createNewTask(formData);
    }
  }
}
