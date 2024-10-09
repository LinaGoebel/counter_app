let counterValue = 0;

const counterElement = document.getElementById("counter-value");
const increaseButton = document.getElementById("increase-btn");
const decreaseButton = document.getElementById("decrease-btn");

function updateCounter() {
  counterElement.textContent = counterValue;
}

increaseButton.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

decreaseButton.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});
