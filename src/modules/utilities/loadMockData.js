export default function loadMockData(projectDetails, AppController, Task) {
  if (localStorage.getItem("projects")) return;

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
 