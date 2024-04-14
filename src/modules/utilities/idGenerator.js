let idCounter = 6;

if (localStorage.getItem("idCounter")) {
  idCounter = Number(localStorage.getItem("idCounter"));
}

export default function generateId() {
  const newId = ++idCounter;
  console.log("generated id")
  localStorage.setItem("idCounter", idCounter.toString());
  return newId;
}
