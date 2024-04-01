import { Task, Project } from "./modules/barrel";

const newProject = new Project("Cool project", "Cool description");
newProject.addTask(
  new Task("Cool task!", "Very long descr", "Tomorrow", "High")
);
newProject.addTask(new Task("Uncool task!", "Short descr"));

const anotherProject = new Project("Bad project", "Nice description");
anotherProject.addTask(new Task("Very cool"));

const moreProject = new Project("Kek project", "Kek descr");
moreProject.addTask(new Task("Not cool, but else"));


console.log(newProject);
console.log(anotherProject);
console.log(moreProject);
