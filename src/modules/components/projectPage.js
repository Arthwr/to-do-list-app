export default function projectPageTemplate(project) {
  const section = document.createElement("section");
  section.classList.add("project-page");
  section.innerHTML = `
       <h2>${project.title}</h2>
       <p>${project.description}</p>
       <button class="t-create-btn">New task</button>
       <div class="task-container">
         <ul></ul>
       </div>
    `;
  return section;
}
