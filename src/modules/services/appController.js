import getFormData from "../utilities/getFormData";

export default class AppController {
  static screenController;
  static project;
  static taskManager;
  static task;
  static currentProject = null;

  // prettier-ignore
  static init( screenControllerInstance, projectInstance, taskManagerInstance, taskInstance) {
    AppController.screenController = screenControllerInstance;
    AppController.project = projectInstance;
    AppController.taskManager = taskManagerInstance;
    AppController.task = taskInstance;

    // UI
    document.addEventListener("click", (e) => {
      switch (true) {
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

        case e.target.matches(".task-summary"):
          AppController.handleTaskSummary(e);
          break;

        case e.target.matches(".delete-task"):
          AppController.handleTaskRemoval(e);
          break;

        case e.target.matches(".p-menu"):
          AppController.screenController.openEditMenu()

        default:
          break;
      }
    });

    // Form submission
    document.addEventListener("submit", (e) => {
      AppController.handleFormSubmission(e);
    })

    // Task checkbox
    document.addEventListener("change", (e) => {
      if (e.target.type === "checkbox") {
        AppController.screenController.handleTaskCompletion(e);
      }
    });
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

  static handleTaskRemoval(event) {
    const taskElement = event.target.closest("li");
    if (!taskElement) return;
    const taskId = taskElement
      .querySelector(".task-row")
      .getAttribute("data-task-id");
    const project = this.getCurrentProject();
    project.removeProjectTask(taskId);
    taskElement.remove();
  }

  // prettier-ignore
  static setCurrentProject(project) {
    if (this.currentProject && this.currentProject !== project) {
      AppController.screenController.toggleActiveProjectStyle(this.currentProject, false);
    }
    this.currentProject = project;
    AppController.screenController.toggleActiveProjectStyle(project, true);
  }

  static getCurrentProject() {
    return this.currentProject;
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
    return newProject;
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
