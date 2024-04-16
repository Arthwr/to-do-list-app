export default function taskRowTemplate(formData) {
  const li = document.createElement("li");

  const isDescriptionEmpty = formData.description.trim() === "";
  const taskInfoClass = isDescriptionEmpty ? "task-info-empty" : "task-info";

  // Set complete status class on task row element based on isComplete variable. 
  const isCompleteClass = formData.isComplete ? "complete" : "";
  const isChecked = formData.isComplete ? "checked" : "";

  li.innerHTML = `
    <div class="task-row ${isCompleteClass}" data-task-id="${formData.id}">
      <span class="priority-marker ${formData.priority.toLowerCase()}"></span>
      <div class="task-content">
        <div>
          <input type="checkbox" ${isChecked}>
          <button class="task-summary" data-task-id="${formData.id}">${formData.title}</button>
        </div>
        <div>
          <span class="task-date">${formData.dueDate}</span>
          <button class="delete-task"></button>
        </div>
      </div>
    </div>
    <div class="${taskInfoClass}">
      <div>
        <div>${formData.description}</div>
      </div>
    </div>
  </div>
 `;
  return li;
}
