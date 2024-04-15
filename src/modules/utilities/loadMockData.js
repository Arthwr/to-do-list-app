export default function loadMockData(projectDetails, AppController, Task) {
  // To add: if local storage "projects" exist currently, we skip loading mockup data, but rather rely on another function
  // that will load projects from localStorage on init. 
  const project = AppController.createNewProject(projectDetails, projectDetails.id);
  projectDetails.tasks.forEach((taskDetails) => {
    const task = new Task(
      taskDetails.title,
      taskDetails.description,
      taskDetails.dueDate,
      taskDetails.priority,
      taskDetails.id
    );
    project.addProjectTask(task);
  });
}
