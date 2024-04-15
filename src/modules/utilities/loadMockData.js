export default function loadMockData(projectDetails, AppController, Task) {
  if (localStorage.getItem("projects")) return;

  const project = AppController.createNewProject({...projectDetails});
  projectDetails.tasks.forEach((taskDetails) => {
    const task = new Task({...taskDetails });
    project.addProjectTask(task);
  });
}
