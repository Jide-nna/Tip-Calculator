let peopleInput = document.querySelector('.people-input')
let billInput = document.querySelector('.bill-input')
const tipPerPerson = document.getElementById('tip-amount')
const totalPerPerson = document.getElementById('total-amount')
const tipButton = document.querySelectorAll('.button')
const tipCustom = document.querySelector('.tip-custom')
//console.log(tipButton)
billInput.addEventListener("input", billInputFun)
peopleInput.addEventListener("input", peopleInputFun)
tipButton.forEach(function(button){
    button.addEventListener('click', handleClick)
  //  console.log(button)
})
tipCustom.addEventListener("input", tipInputFun)

billInput.value = '0.0'
peopleInput.value = '1'
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2)
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2)


let billValue = 0.0
let peopleValue = 1
let buttonsValue = 0.15

function billInputFun() {
    billValue = parseFloat(billInput.value)
   // console.log(billValue)
    calculateTip()
}
function peopleInputFun() {
    peopleValue = parseFloat(peopleInput.value)
  //  console.log(peopleValue)
    calculateTip()
}
function tipInputFun() {
    tipValue = parseFloat(tipCustom.value/100)
    console.log(tipValue)
    tipButton.forEach(function(button) {
        button.classList.remove("active-tip")
    })
    calculateTip()
}

function handleClick(event) {
    tipButton.forEach(function(button){
        button.classList.remove("active-tip")
        if(event.target.innerHTML == button.innerHTML){
           button.classList.add("active-tip")
            buttonsValue = parseFloat(button.innerHTML)/100
        }
    })
   // console.log(buttonsValue)
    calculateTip()
}

function calculateTip() {
    if(peopleValue >= 1){
        let tipAmount = (billValue * buttonsValue)/peopleValue
        let total = (billValue * tipAmount)/peopleValue
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2)
        totalPerPerson.innerHTML = "$" + total.toFixed(2)
    }
}