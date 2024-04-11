import "./assets/styles/styles.css";
import { AppController, ScreenController, Project, Task, TaskManager} from "./modules/barrel";
import { weekdayProjectDetails, sundayProjectDetails } from "./modules/data/mockupData";
import loadMockData from "./modules/utilities/loadMockData";

// Initialize app
AppController.init(ScreenController, Project, TaskManager, Task);

// Load initial projects & tasks
loadMockData(weekdayProjectDetails, AppController, Task);
loadMockData(sundayProjectDetails, AppController, Task);

