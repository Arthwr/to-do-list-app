import "./assets/styles/styles.css";
import { AppController, ScreenController, Project, Task, TaskManager } from "./modules/barrel";

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
