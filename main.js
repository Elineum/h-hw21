const buttonCount = 7;
const buttonHolder = document.querySelector(".buttons-wrap");

for (let i = 1; i <= buttonCount; i++) {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = i;
  buttonHolder.append(buttonEl);
}

const buttonElements = [...document.querySelectorAll("button")];
const evenButtons = buttonElements.filter((_, index) => (index + 1) % 2 === 0);
const oddButtons = buttonElements.filter((_, index) => (index + 1) % 2 === 1);

const getPromises = (arrayType, resolveType) => {
  return arrayType.map((btnEl) => {
    return new Promise((resolve, _) => {
      btnEl.addEventListener("click", () => {
        btnEl.classList.add("shadow");
        resolve(resolveType);
      });
    });
  });
};

const evenPromises = getPromises(evenButtons, "even");
const oddPromises = getPromises(oddButtons, "odd");
const buttonPromises = getPromises(buttonElements, "all");

Promise.all(buttonPromises).then(() => {
  if (buttonElements.length > 0) {
    alert("Clicked all buttons! Unreal skills!");
  }
});

Promise.all(oddPromises).then(() => {
  if (buttonElements.length > 0) {
    alert("Clicked all odd buttons! Incredible.");
  }
});

Promise.all(evenPromises).then(() => {
  if (buttonElements.length > 1) {
    alert("Clicked all even buttons! U cool.");
  }
});
