export default function attachFormOverlay() {
  const body = document.querySelector("body");
  const overlay = document.createElement("div");
  overlay.classList.add("bg-overlay");
  body.appendChild(overlay);
}
