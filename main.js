"use strict";

//let zone;
//let ztwo;
//let op;

// function calc() {
//    zone = prompt("Die erste Zahl: ");
//    op = prompt("Welche Operation möchtest du ausführen?");
//    ztwo = prompt("Die zweite Zahl: ");

//    document.getElementById("result").innerHTML = ('Das Ergebins ist: ' + eval(`${zone} ${op} ${ztwo}`));
//}

// alert(calc());

    function calcbt() {
        let input = document.getElementById("txtin").value;
        console.log(input);
        document.getElementById("result").innerHTML = ('Das Ergebins ist: ' + eval(`${input}`));
    }


   
  let currentInput = '';
  let operator = '';
  let previousInput = '';

  function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
  }

  function appendDot() {
   
    if (!currentInput.includes('.')) {
      if (currentInput === '') {
        currentInput = '0.'; 
      } else {
        currentInput += '.';
      }
      document.getElementById('display').value = currentInput;
    }
  }

  function setOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
  }

  function calculate() {
    let result;

    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    if (operator === '+') {
      result = prev + curr;
    } else if (operator === '-') {
      result = prev - curr;
    } else if (operator === '*') {
      result = prev * curr;
    } else if (operator === '/') {
      result = prev / curr;
    }

    document.getElementById('display').value = result;
    currentInput = result.toString();
    operator = '';
  }

  function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
  }