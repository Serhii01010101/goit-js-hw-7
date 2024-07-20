const btnEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  textEl.textContent = color;
});
