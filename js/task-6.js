const inputEl = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const box = document.querySelector("#boxes");
const createBtn = buttons[0];
const destroyBtn = createBtn.nextElementSibling;

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const inputValue = parseInt(inputEl.value, 10);
  if (inputValue >= 1 && inputValue <= 100) {
    destroyBoxes();
    createBoxes(inputValue);
    inputEl.value = "";
    box.classList.add("box-grid");
  } else {
    alert("Enter number between 1 and 100");
  }
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const createdDiv = document.createElement("div");
    createdDiv.style.width = width + "px";
    createdDiv.style.height = height + "px";
    createdDiv.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(createdDiv);
    width += 10;
    height += 10;
  }

  box.appendChild(fragment);
}

function destroyBoxes() {
  box.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
