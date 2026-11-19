const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  console.log(event.type); // click
  console.log(event.clientX); // Mouse X position
  console.log(event.clientY); // Mouse Y position
});

const input = document.getElementById("username");
input.addEventListener("keydown", (event) => {
  console.log(event.key);
  console.log(event.code);

  if (event.key === "Enter") {
    console.log("Enter key pressed");
  }
});

input.addEventListener("focus", () => {
  console.log("input focused");
});
input.addEventListener("blur", () => {
  console.log("input lost focus");
});

document.addEventListener("copy", (event) => {
  console.log("Content copied");
  console.log(event.type);
});

document.addEventListener("paste", (event) => {
  const text = event.clipboardData.getData("text");
  console.log("Pasted:", text);
});

const box = document.querySelector("#box");
const dropZone = document.querySelector("#dropZone");
box.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "box");
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  console.log(event.dataTransfer.getData("text/plain"));
});

const box1 = document.querySelector("#box1");

box.addEventListener("click", () => {
  console.log("Clicked");
});

box.addEventListener("dblclick", () => {
  console.log("Double clicked");
});

box.addEventListener("mouseenter", () => {
  console.log("Mouse entered");
});

box.addEventListener("mouseleave", () => {
  console.log("Mouse left");
});

input.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});

input.addEventListener("keyup", (event) => {
  console.log("Key released:", event.key);
});

input.addEventListener("input", (event) => {
  console.log("Typing:", event.target.value);
});

input.addEventListener("change", (event) => {
  console.log("Changed:", event.target.value);
});

input.addEventListener("focus", () => {
  input.style.borderColor = "blue";
});

input.addEventListener("blur", () => {
  input.style.borderColor = "gray";
});

window.addEventListener("scroll", () => {
  console.log("Scroll position:", window.scrollY);
});
window.addEventListener("resize", () => {
  console.log("Width:", window.innerWidth);
  console.log("Height:", window.innerHeight);
});
window.addEventListener("scroll", () => {
  console.log("Scroll position:", window.scrollY);
});
