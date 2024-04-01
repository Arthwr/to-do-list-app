import { Task, Project } from "./modules/barrel";

const newProject = new Project("New Cool Project", "Very cool description");
console.log(newProject);
newProject.addTaskToProject(
  new Task("Cool task", "Cool description", "Tomorrow", "High")
);
console.log(newProject.taskList);
const anotherProject = new Project("Not so cool project", "Bad description");
console.log(anotherProject);
