export default function projectForm() {
  const form = document.createElement("form");
  form.id = "project-form";
  form.classList.add("form");
  form.innerHTML = `
  <fieldset>
    <legend>Your new project</legend>
    <div>
      <label for="title">Title</label>
      <input type="text" name="title" id="title" required />
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
      <button type="submit">Submit</button>
      <button class="p-form-cancel">Cancel</button>
    </div>
  </fieldset>
  `;
  return form;
}