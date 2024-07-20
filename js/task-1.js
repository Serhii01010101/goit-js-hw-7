const listEl = document.querySelector("#categories");

console.log(`Number of catigories: ${listEl.children.length}`);

const itemEl = document.querySelectorAll(".item");

itemEl.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
