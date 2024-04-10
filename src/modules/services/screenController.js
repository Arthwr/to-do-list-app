import projectForm from "../components/projectForm";
import taskForm from "../components/taskForm";
import taskRowTemplate from "../components/taskRow";
import projectPageTemplate from "../components/projectPage";

export default class ScreenController {
  static renderForm(type) {
    const body = document.querySelector("body");
    const form = type === "project" ? projectForm() : taskForm();
    body.appendChild(form);
  }

  static renderProjectTitle(project) {
    const sidebarContainer = document.querySelector("#p-sidebar-container");
    const projectTab = document.createElement("button");
    projectTab.textContent = project.title;
    sidebarContainer.appendChild(projectTab);
    return projectTab;
  }

  static renderProjectPage(project) {
    const mainContainer = document.querySelector("main");
    mainContainer.innerHTML = "";
    const projectPageElement = projectPageTemplate(project);
    
    mainContainer.appendChild(projectPageElement);

    const tasks = project.taskManager.getTaskList();
    tasks.forEach((task) => {
      this.renderTask(task);
    });
  }

  static renderTask(formData) {
    const taskContainer = document.querySelector(".task-container > ul");
    const taskRowElement = taskRowTemplate(formData);
    taskContainer.appendChild(taskRowElement);
  }
}
