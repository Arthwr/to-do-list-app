export default class ScreenController {
  constructor() {}

  static getFormData() {
    const formElement = document.getElementById("form");
    const formData = [...formElement.elements].reduce((data, element) => {
      if (element.name && element.type !== "submit") {
        data[element.name] = element.value;
      }
      return data;
    }, {});
    return formData;
  }

  static renderProject(project) {
    const parentContainer = document.querySelector(".p-sidebar-container");
    const projectTitle = document.createElement("button");
    parentContainer.appendChild(projectTitle);
    projectTitle.textContent = project.title;
  }
}
