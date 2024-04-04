import "./assets/styles/styles.css";
import AppController from "./modules/services/appController";
import ScreenController from "./modules/services/screenController";
import Project from "./modules/services/project";
import TaskManager from "./modules/services/taskManager";
import Task from "./modules/services/tasks";

AppController.init(ScreenController, Project, TaskManager, Task);
