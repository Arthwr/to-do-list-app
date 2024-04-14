export default function projectPageTemplate(project) {
  const section = document.createElement("section");
  section.classList.add("project-page");
  section.innerHTML = `
       <div>
        <h2>${project.title}</h2>
        <button class="p-menu"></button>
        <div class="dropdown-menu">
          <button class="p-edit">Edit</button>
          <button class="p-delete">Delete</button>
        </div>
       </div>
       <p>${project.description}</p>
       <button class="t-create-btn">New task</button>
       <div class="task-container">
         <ul></ul>
       </div>
    `;
  return section;
}
