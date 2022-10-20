let peopleInput = document.querySelector(".people-input");
let billInput = document.querySelector(".bill-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tipButton = document.querySelectorAll(".button");
const tipCustom = document.querySelector(".tip-custom");
const error = document.querySelector(".error");
const resetBtn = document.querySelector(".reset");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tipButton.forEach(function (button) {
  button.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", tipInputFun);

resetBtn.addEventListener("click", reset);

billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let buttonsValue = 0.15;

function billInputFun() {
  billValue = parseFloat(billInput.value);
  // console.log(billValue)
  calculateTip();
}
function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value);
  //  console.log(peopleValue)

  if (peopleValue < 1) {
    error.style.display = "block";
    peopleInput.style.border = "thick solid red";
  } else {
    error.style.display = "none";
    peopleInput.style.border = "none";
  }
  calculateTip();
}
function tipInputFun() {
  tipValue = parseFloat(tipCustom.value / 100);
  tipButton.forEach(function (button) {
    button.classList.remove("active-tip");
  });
  calculateCustomTip();
}

function handleClick(event) {
  tipButton.forEach(function (button) {
    button.classList.remove("active-tip");
    if (event.target.innerHTML == button.innerHTML) {
      button.classList.add("active-tip");
      buttonsValue = parseFloat(button.innerHTML) / 100;
    }
  });
  // console.log(buttonsValue)
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * buttonsValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
}
function calculateCustomTip() {
  if (peopleValue >= 1) {
    let customValue = (billValue * tipValue) / peopleValue;
    let totalTip = (billValue + customValue) / peopleValue;
    tipPerPerson.innerHTML = "$" + customValue.toFixed(2);
    totalPerPerson.innerHTML = "$" + totalTip.toFixed(2);
  }
}

function reset() {
  billInput.value = "0.0";
  billInputFun();
  peopleInput.value = "1";
  peopleInputFun();
  tipCustom.value = "";
  tipButton.forEach(function (button) {
    button.classList.remove("active-tip");
  });
}
