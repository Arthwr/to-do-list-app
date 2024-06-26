import projectFormTemplate from "../components/projectForm";
import taskFormTemplate from "../components/taskForm";
import taskRowTemplate from "../components/taskRow";
import projectPageTemplate from "../components/projectPage";

export default class ScreenController {
  static renderForm(type, isEdit = false) {
    const body = document.querySelector("body");
    const form =
      type === "project" ? projectFormTemplate() : taskFormTemplate();

    if (isEdit) {
      form.setAttribute("data-form-type", "edit");
    }
    body.appendChild(form);
  }

  static renderProjectTitle(project) {
    const sidebarContainer = document.querySelector("#p-sidebar-container");
    const projectTab = document.createElement("button");
    projectTab.textContent = project.title;
    projectTab.setAttribute("data-project-id", project.id);
    sidebarContainer.appendChild(projectTab);
    return projectTab;
  }

  static editProjectTitle(project) {
    const title = document.querySelector(".project-page h2");
    const description = document.querySelector(".project-page p");
    const tabButton = document.querySelector("#p-sidebar-container > button.active");
    
    tabButton.textContent = project.title;
    title.textContent = project.title;
    description.textContent = project.description;
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

  static openEditMenu() {
    const menu = document.querySelector(".dropdown-menu");
    if (!menu) return;
    menu.classList.toggle("open");
  }

  static removeProjectPageAndTitle() {
    const mainContainer = document.querySelector("main");
    const activeTab = document.querySelector(
      "#p-sidebar-container > button.active"
    );
    mainContainer.innerHTML = "";
    activeTab.remove();
  }

  static renderTask(formData) {
    const taskContainer = document.querySelector(".task-container > ul");
    const taskRowElement = taskRowTemplate(formData);
    taskContainer.appendChild(taskRowElement);
  }

  static toggleTaskCompletion(element) {
    element.classList.toggle("complete");
  }

  static toggleActiveProjectStyle(project, setActive) {
    const projectTab = document.querySelector(
      `#p-sidebar-container > button[data-project-id="${project.id}"]`
    );
    if (!projectTab) return;
    setActive
      ? projectTab.classList.add("active")
      : projectTab.classList.remove("active");
  }
}
