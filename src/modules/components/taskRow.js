export default function taskRowTemplate(formData) {
  const li = document.createElement("li");

  const isDescriptionEmpty = formData.description.trim() === "";
  const taskInfoClass = isDescriptionEmpty ? "task-info-empty" : "task-info";

  li.innerHTML = `
    <div class="task-row" data-task-id="${formData.id}">
      <span class="priority-marker ${formData.priority.toLowerCase()}"></span>
      <div class="task-content">
        <div>
          <input type="checkbox">
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
