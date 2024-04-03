import AppController from "./modules/appController";
import Project from "./modules/project";
import Task from "./modules/tasks";

// prettier-ignore

const newProject = new Project ("Cool Project", "Something something")
newProject.addProjectTask(
  new Task("Cool title", "Cool description", "Tomorrow", "High")
);

console.log(newProject);
