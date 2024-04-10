import "./assets/styles/styles.css";
import AppController from "./modules/services/appController";
import ScreenController from "./modules/services/screenController";
import Project from "./modules/services/project";
import TaskManager from "./modules/services/taskManager";
import Task from "./modules/services/tasks";

AppController.init(ScreenController, Project, TaskManager, Task);

// Load initial projects & tasks
AppController.createNewProject({
  title: "Weekday",
  description: "Most tragedies are born from inaction",
});

AppController.createNewProject({
  title: "Sunday",
  description: "The mask you wear changes your true self, for better or worse",
});
