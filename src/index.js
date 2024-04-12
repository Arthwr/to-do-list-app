import "./assets/styles/styles.css";
import { AppController, ScreenController, Project, Task, TaskManager} from "./modules/barrel";
import { tuesdayProjectDetails, sundayProjectDetails } from "./modules/data/mockupData";
import loadMockData from "./modules/utilities/loadMockData";

// Initialize app
AppController.init(ScreenController, Project, TaskManager, Task);

// Load initial projects & tasks
loadMockData(sundayProjectDetails, AppController, Task);
loadMockData(tuesdayProjectDetails, AppController, Task);
