export default function loadMockData(projectDetails, AppController, Task) {
  const project = AppController.createNewProject(projectDetails);
  projectDetails.tasks.forEach((taskDetails) => {
    const task = new Task(
      taskDetails.title,
      taskDetails.description,
      taskDetails.dueDate,
      taskDetails.priority
    );
    project.addProjectTask(task);
  });
}
