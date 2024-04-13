export default function projectPageTemplate(project) {
  const section = document.createElement("section");
  section.classList.add("project-page");
  section.innerHTML = `
       <div>
        <h2>${project.title}</h2>
        <button class="p-edit-btn"></button>
        <div class="dropdown-menu">
          <button>Edit</button>
          <button>Delete</button>
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
