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
          AppController.screenController.openEditMenu();
          break;

        case e.target.matches(".p-delete"):
          AppController.handleProjectRemoval();
          break;

        case e.target.matches(".save-btn"):
          AppController.updateLocalStorage();
          break;
          
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
    if (!localStorage.getItem("projects")) return;

    const storedData = localStorage.getItem("projects");
    const projects = JSON.parse(storedData);

    projects.forEach((projectObj) => {
      const newProject = AppController.createNewProject({...projectObj});
      projectObj.taskList.forEach((taskData) => {
        const newTask = new AppController.task({ ...taskData });
        newProject.addProjectTask(newTask);
      });
    });
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

  static handleProjectRemoval() {
    const project = this.getCurrentProject();
    AppController.project.removeProject(project.id);
    AppController.screenController.removeProjectPageAndTitle();
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
    const newProject = new AppController.project({...formData});
    AppController.assignProjectTab(newProject);
    return newProject;
  }
  //prettier-ignore
  static createNewTask(formData) {
    const newTask = new AppController.task({...formData});
    const project = AppController.currentProject;
    project.addProjectTask(newTask);
    AppController.screenController.renderTask(newTask);
  }

  static handleFormSubmission(e) {
    e.preventDefault();
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

  static updateLocalStorage() {
    const projectList = AppController.project.getAllProjects();
    const serializedProject = projectList.map((project) => project.serialize());
    localStorage.setItem("projects", JSON.stringify(serializedProject));
  }
}
