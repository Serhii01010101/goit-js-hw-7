const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function updateGreeting() {
  const trimmedValue = nameInput.value.trim();

  if (trimmedValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = trimmedValue;
  }
}

nameInput.addEventListener("input", updateGreeting);
