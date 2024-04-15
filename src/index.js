import "./assets/styles/styles.css";
import { AppController, ScreenController, Project, Task, TaskManager} from "./modules/barrel";
import { tuesdayProjectDetails, sundayProjectDetails } from "./modules/data/mockupData";
import loadMockData from "./modules/utilities/loadMockData";

// Initialize app
AppController.init(ScreenController, Project, TaskManager, Task);

// Load initial projects & tasks
loadMockData(sundayProjectDetails, AppController, Task);
loadMockData(tuesdayProjectDetails, AppController, Task);
console.log(Project.getAllProjects());
const projectList = localStorage.getItem('projects');
console.log(projectList);

// To do: function to load projects from localStorage if it exists. 