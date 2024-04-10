import attachFormOverlay from "./modalOverlay";

export default function taskForm() {
  // Grey background overlay
  attachFormOverlay();

  const form = document.createElement("form");
  form.id = "task-form";
  form.classList.add("form");
  form.innerHTML = `
    <fieldset>
      <legend>Your new task</legend>
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div>
        <label for="description">Notes</label>
        <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
        ></textarea>
      </div>
      <div>
        <label>Due date</label>
        <input type="date" name="dueDate" id= "dueDate">
      </div>
      <div>
        <label>Priority</label>
        <select name="priority" id="priority">
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
        </select>
      </div>
      <div>
        <button type="submit">Submit</button>
        <button class="p-form-cancel">Cancel</button>
      </div>
    </fieldset>
    `;

  return form;
}
