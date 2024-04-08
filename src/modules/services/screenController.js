import modalOverlay from "../components/modalOverlay";
import projectForm from "../components/projectForm";
import taskForm from "../components/taskForm";
import deleteIcon from "../../assets/images/delete.svg";

export default class ScreenController {
  static renderForm(type) {
    const body = document.querySelector("body");
    const overlay = modalOverlay();
    const form = type === "project" ? projectForm() : taskForm();

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
    mainContainer.innerHTML = "";
    const projectSection = document.createElement("section");
    projectSection.classList.add("project-page");
    mainContainer.appendChild(projectSection);

    const projectTitle = document.createElement("h2");
    const projectDescription = document.createElement("p");
    const taskBtn = document.createElement("button");
    const toDoContainer = document.createElement("div");

    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    taskBtn.textContent = "New task";
    taskBtn.classList.add("t-create-btn");
    toDoContainer.classList.add("task-container");

    projectSection.appendChild(projectTitle);
    projectSection.appendChild(projectDescription);
    projectSection.appendChild(taskBtn);
    projectSection.appendChild(toDoContainer);

    const ul = document.createElement("ul");
    toDoContainer.appendChild(ul);

    const tasks = project.taskManager.getTaskList();
    tasks.forEach((task) => {
      this.renderTask(task);
    });
  }

  static renderTask(formData) {
    const taskContainer = document.querySelector(".task-container > ul");
    const li = document.createElement("li");
    taskContainer.appendChild(li);

    const priorityMarker = document.createElement("span");
    priorityMarker.classList.add(
      "priority-marker",
      formData.priority.toLowerCase()
    );
    const content = document.createElement("div");
    content.classList.add("task-content");

    li.appendChild(priorityMarker);
    li.appendChild(content);

    const leftDiv = document.createElement("div");
    const rightDiv = document.createElement("div");

    content.appendChild(leftDiv);
    content.appendChild(rightDiv);

    // Task checkbox and title
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskLink = document.createElement("button");
    taskLink.textContent = formData.title;

    // leftDiv.appendChild(priorityMarker);
    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(taskLink);

    // Task date and delete icon
    const dateSpan = document.createElement("span");
    dateSpan.classList.add("task-date");
    dateSpan.textContent = formData.dueDate;

    const linkWrap = document.createElement("a");
    linkWrap.classList.add("delete-task");
    const img = document.createElement("img");
    img.src = deleteIcon;
    linkWrap.appendChild(img);

    rightDiv.appendChild(dateSpan);
    rightDiv.appendChild(linkWrap);
  }

  static updateScreen() {
    // We clean screen on init
    // We render mock project and mock task
    // We also retrieve localStorage for saved tasks and render them
  }
}
