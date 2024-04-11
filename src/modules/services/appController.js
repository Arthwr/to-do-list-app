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

    // Loading logic for buttons
    document.addEventListener("click", (e) => {
      if (e.target.matches("button")) {
        e.preventDefault();
      }

      switch(true) {
        case e.target.matches(".p-create-btn"):
        AppController.screenController.renderForm("project");
        break;

        case e.target.matches(".t-create-btn"):
        AppController.screenController.renderForm("task");
        break;
        
        case e.target.matches(".p-form-cancel"):
        const form = e.target.closest(".form");
        AppController.closeModalForm(form);
        break;

        case e.target.matches(".submit"):
        AppController.handleFormSubmission(e);
        break;

        case e.target.matches(".task-summary"):
        AppController.handleTaskSummary(e);
        break;

        default:
        break;
      }
    })
  }

  static loadProjects() {
    const projects = AppController.project.getAllProjects();
    projects.forEach((project) =>
      AppController.screenController.assignProjectTab(project)
    );
  }

  static closeModalForm(form) {
    const overlay = document.querySelector(".bg-overlay");
    form.remove();
    overlay.remove();
  }

  static handleTaskSummary(event) {
    const taskElement = event.target;
    const taskInfo = taskElement.closest("li").querySelector(".task-info");
    if (!taskInfo) return;
    taskInfo.classList.toggle("active");
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
  //prettier-ignore
  static createNewTask(formData) {
    const { title, description, dueDate, priority } = formData;
    const newTask = new AppController.task(title, description, dueDate, priority);
    const project = AppController.currentProject;
    project.addProjectTask(newTask);
    AppController.screenController.renderTask(newTask);
  }

  static handleFormSubmission(e) {
    const formElement = e.target.closest("form");
    const formData = getFormData(formElement);
    const formType = formElement.id === "project-form" ? "project" : "task";

    if (formType === "project") {
      AppController.createNewProject(formData);
    } else if (formType === "task") {
      AppController.createNewTask(formData);
    }
    AppController.closeModalForm(formElement);
  }
}
