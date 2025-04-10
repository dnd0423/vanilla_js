const screen = document.getElementById("screen");

const buttons = document.querySelectorAll("button");

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
