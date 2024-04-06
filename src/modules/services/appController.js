import getFormData from "../utilities/getFormData";

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
    document.addEventListener("submit", (e) => {
      if(e.target.matches(".form")) {
        e.preventDefault();
        AppController.handleFormSubmission(e, "project");
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

    // const taskSubmitBtn = document.getElementById("t-submit-btn");
    // taskSubmitBtn.addEventListener("click", () => AppController.handleFormSubmission(e, 'task'));
  }

  static closeModalForm(event, form) {
    event.preventDefault();
    const overlay = document.querySelector(".bg-overlay");
    form.remove();
    overlay.remove();
  }

  //prettier-ignore
  static assignProjectTab(project) {
    const projectTab = AppController.screenController.renderProjectTitle(project);
    projectTab.addEventListener("click", () => AppController.screenController.renderProjectPage(project));
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
    AppController.project.addProjectTask(newTask);
  }

  static handleFormSubmission(event, type) {
    event.preventDefault();
    const formElement = document.querySelector(".form");
    const formData = getFormData(formElement);
    if (type === "project") {
      AppController.createNewProject(formData);
    } else if (type === "task") {
      AppController.createNewTask(formData);
    }
  }
}
