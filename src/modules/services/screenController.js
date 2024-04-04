import modalOverlay from "../components/modalOverlay";
import projectForm from "../components/projectForm";

export default class ScreenController {
  static getFormData() {
    const formElement = document.querySelector(".form");
    const formData = [...formElement.elements].reduce((data, element) => {
      if (element.name && element.type !== "submit") {
        data[element.name] = element.value;
      }
      return data;
    }, {});
    return formData;
  }

  static renderProjectForm() {
    const body = document.querySelector("body");
    const overlay = modalOverlay();
    const form = projectForm();

    body.appendChild(overlay);
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
    const projectSection = document.createElement("section");
    mainContainer.appendChild(projectSection);

    const projectTitle = document.createElement("h2");
    const projectDescription = document.createElement("p");
    const toDoContainer = document.createElement("div");

    h2.textContent = project.title;
    projectDescription.textContent = project.description;
    toDoContainer.innerHTML = "";

    projectSection.appendChild(projectTitle);
    projectSection.appendChild(projectDescription);
    projectSection.appendChild(toDoContainer);

    const ul = document.createElement("ul");
    toDoContainer.appendChild(ul);

    const tasks = project.taskManager.getTaskList();
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.title;
      ul.appendChild(li);
    });
  }

  static updateScreen() {
    // We clean screen on init
    // We render mock project and mock task
    // We also retrieve localStorage for saved tasks and render them
  }
}
