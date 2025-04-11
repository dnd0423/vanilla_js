const screen = document.getElementById("screen");

const buttons = document.querySelectorAll("button");

const resultButton = document.getElementById("resultButton");

const resetButton = document.getElementById("resetButton");

let currentInput = "";

const operatorRegex = /^(\d+|\*\*|[+\-*/])$/;
const numberRegex = /[0-9]/g;

function appendToScreen(value){
  screen.value += value;
}

function clearScreen(){
  screen.value = "";
}

function calc(operator, numbers){
  const [num1, num2] = numbers.map(Number);

  switch(operator){
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error!";
    default:
      return "";
    
  }

}

function handleButtonClick(event){
  event.preventDefault();

  const buttonText = event.target.innerText;

  if(numberRegex.test(buttonText) == true){
    appendToScreen(buttonText);
  }else if(operatorRegex.test(buttonText) == true){
    appendToScreen(buttonText);
  }

}

function initButtonListeners(){
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  })
}

function initSingleResultButtonListeners(){
  resultButton.addEventListener("click", resultClick);
}

function initSingleResetButtonListeners(){
  resetButton.addEventListener("click", resetClick);
}

function handleResultClick(){
  const screenValue = screen.value;

  if(screenValue.includes("+")){
    const [num1, num2] = screenValue.split("+");

    screen.value = calc("+", [num1, num2]);

    return screen.value;
  }else if(screenValue.includes("-")){
    const [num1, num2] = screenValue.split("-");

    screen.value = calc("-", [num1, num2]);

    return screen.value;
  }else if(screenValue.includes("*")){
    const [num1, num2] = screenValue.split("*");

    screen.value = calc("*", [num1, num2]);

    return screen.value;
  }else if(screenValue.includes("/")){
    const [num1, num2] = screenValue.split("/");

    screen.value = calc("/", [num1, num2]);

    return screen.value;
  }
}

function resultClick(event){
  event.preventDefault();

  const buttonText = event.target.innerText;

  if(buttonText === "="){
    screen.value = handleResultClick();
  }

}

function resetClick(event){
  event.preventDefault();

  const buttonText = event.target.innerText;

  if(buttonText === "c" ){
    screen.value = "";
  }
}



initButtonListeners();
initSingleResultButtonListeners();
initSingleResetButtonListeners();

