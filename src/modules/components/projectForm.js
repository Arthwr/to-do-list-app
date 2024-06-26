import attachFormOverlay from "./formOverlay";

export default function projectForm() {
  // Grey background overlay
  attachFormOverlay();

  const form = document.createElement("form");
  form.id = "project-form";
  form.classList.add("form");
  form.innerHTML = `
  <fieldset>
    <legend>Your new project</legend>
    <div>
      <label for="title">Title</label>
      <input type="text" name="title" id="title" minlength="3" maxlength="20" required />
    </div>
    <div>
      <label for="description">Description</label>
      <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
      ></textarea>
    </div>
    <div>
      <button type="submit" class="submit">Submit</button>
      <button class="p-form-cancel">Cancel</button>
    </div>
  </fieldset>
  `;

  return form;
}
