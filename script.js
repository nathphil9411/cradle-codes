'use strict';
//assigning varibles to elements of the calculator
const cummulativeResult = document.getElementById('displayCummulative result');
const displayResultEl = document.getElementById('displayResult');
const nineEl = document.getElementById('btn--9');
const eightEl = document.getElementById('btn--8');
const sevenEl = document.getElementById('btn--7');
const sixEl = document.getElementById('btn--6');
const fiveEl = document.getElementById('btn--5');
const fourEl = document.getElementById('btn--4');
const threeEl = document.getElementById('btn--3');
const twoEl = document.getElementById('btn--2');
const oneEl = document.getElementById('btn--1');
const zeroEl = document.getElementById('btn--0');
const dotEl = document.getElementById('btn--dot');
const plusEl = document.getElementById('btn--plus');
const minusEl = document.getElementById('btn--subtract');
const multiplyEl = document.getElementById('btn--multiply');
const divideEl = document.getElementById('btn--divide');
const equalsEl = document.getElementById('btn--equals');
const deleteEl = document.getElementById('btn--delete');
const clearEl = document.getElementById('btn--clear');
const clearAllEl = document.getElementById('btn--clearAll');
//starting conditions
let operationLogic = 'none';
displayResultEl.value = '0';
let operationPerformed = false;
let numArray = [];
let answer = 0;
let operations = false;
let operationChecked = true; //stops the oprators from always adding whats is on the diplay.
let cycle = false;
//function for numbers and .

const renderNumber = function (num) {
  if (!operationPerformed) {
    if (displayResultEl.value === '0' || cycle === true) {
      displayResultEl.value = num;
      cycle = false;
    } else {
      displayResultEl.value += num;
    }
    operationChecked = false;
  } else {
    if (operations || displayResultEl.value === '0') {
      displayResultEl.value = num;
      operations = false;
    } else {
      displayResultEl.value += num;
    }
  }
  operationChecked = false;
};

for (let i = 0; i < 10; i++) {
  document.getElementById(`btn--${i}`).addEventListener('click', function () {
    renderNumber(i);
  });
}
//displaying the dot.
dotEl.addEventListener('click', function () {
  if (!displayResultEl.value.includes('.')) displayResultEl.value += '.';
});

//clearing functions
deleteEl.addEventListener('click', function () {
  if (displayResultEl.value.length === 1) {
    displayResultEl.value = '0';
  } else {
    displayResultEl.value = displayResultEl.value.substring(
      0,
      displayResultEl.value.length - 1
    );
  }
});

clearEl.addEventListener('click', function () {
  displayResultEl.value = '0';
});

//operations

plusEl.addEventListener('click', function () {
  if (!operationChecked) {
    if (
      !operationPerformed &&
      displayResultEl.value !== '0' &&
      operationLogic === 'none'
    ) {
      operationLogic = 'plus';
      operations = true;
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value = numArray[0] + ' + ';
      operationPerformed = true;
    } else if (
      operationPerformed &&
      displayResultEl.value !== '0' &&
      operationLogic === 'plus'
    ) {
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value += numArray[1] + ' + ';
      answer = numArray[0] + numArray[1];
      numArray[0] = answer;
      displayResultEl.value = answer;
      numArray.pop();
      operations = true;
    } else if (
      operationPerformed &&
      displayResultEl.value !== '0' &&
      operationLogic !== 'plus'
    ) {
      if (
        operationLogic === 'minus' &&
        operationPerformed === true &&
        displayResultEl.value !== '0'
      ) {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + ' ';
        answer = numArray[0] - numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        operationLogic = 'plus';
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' + ';
      } else if (operationLogic === 'multiply') {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + ' ';
        answer = numArray[0] * numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        operationLogic = 'plus';
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' + ';
      } else {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + ' ';
        answer = numArray[0] / numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        operationLogic = 'plus';
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' + ';
      }
    }
    operationChecked = true;
  }
});

minusEl.addEventListener('click', function () {
  if (!operationChecked) {
    if (!operationPerformed && displayResultEl.value !== '0') {
      operationLogic = 'minus';
      operations = true;
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value = numArray[0] + ' - ';
      operationPerformed = true;
    } else if (
      operationPerformed &&
      displayResultEl.value !== '0' &&
      operationLogic === 'minus'
    ) {
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value += numArray[1] + ' - ';
      answer = numArray[0] - numArray[1];
      numArray[0] = answer;
      displayResultEl.value = answer;
      numArray.pop();
      operations = true;
    } else if (
      operationPerformed &&
      displayResultEl.value !== '0' &&
      operationLogic !== 'minus'
    ) {
      if (operationLogic === 'plus') {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + ' ';
        answer = numArray[0] + numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' - ';
        operationLogic = 'minus';
      } else if (operationLogic === 'multiply') {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + '  ';
        answer = numArray[0] * numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        operationLogic = 'minus';
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' - ';
      } else {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + '  ';
        answer = numArray[0] / numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        operationLogic = 'minus';
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' - ';
      }
    }
    operationChecked = true;
  }
});
multiplyEl.addEventListener('click', function () {
  if (!operationChecked) {
    if (!operationPerformed && displayResultEl.value !== '0') {
      operationLogic = 'multiply';
      operations = true;
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value = numArray[0] + ' x ';
      operationPerformed = true;
    } else if (
      operationPerformed &&
      displayResultEl.value !== '0' &&
      operationLogic === 'multiply'
    ) {
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value += numArray[1] + ' x ';
      answer = numArray[0] * numArray[1];
      numArray[0] = answer;
      displayResultEl.value = answer;
      numArray.pop();
      operations = true;
    } else if (
      operationPerformed &&
      displayResultEl.value !== '0' &&
      operationLogic !== 'multiply'
    ) {
      if (operationLogic === 'plus') {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + '  ';
        answer = numArray[0] + numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        operationLogic = 'multiply';
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' x ';
      } else if (operationLogic === 'minus') {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + ' ';
        answer = numArray[0] - numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        operationLogic = 'multiply';
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' x ';
      } else {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + ' ';
        answer = numArray[0] / numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        operationLogic = 'multiply';
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' x ';
      }
    }
    operationChecked = true;
  }
});

divideEl.addEventListener('click', function () {
  if (!operationChecked) {
    if (!operationPerformed && displayResultEl.value !== '0') {
      operationLogic = 'divide';
      operations = true;
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value = numArray[0] + ' / ';
      operationPerformed = true;
    } else if (
      operationPerformed &&
      displayResultEl.value !== '0' &&
      operationLogic === 'divide'
    ) {
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value += numArray[1] + ' / ';
      answer = numArray[0] / numArray[1];
      numArray[0] = answer;
      displayResultEl.value = answer;
      numArray.pop();
      operations = true;
    } else if (
      operationPerformed &&
      displayResultEl.value !== '0' &&
      operationLogic !== 'divide'
    ) {
      if (operationLogic === 'plus') {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + '  ';
        answer = numArray[0] + numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        operationLogic = 'divide';
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' / ';
      } else if (operationLogic === 'minus') {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + ' ';
        answer = numArray[0] - numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        operationLogic = 'divide';
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' / ';
      } else {
        numArray.push(parseFloat(displayResultEl.value));
        cummulativeResult.value += numArray[1] + ' ';
        answer = numArray[0] * numArray[1];
        numArray[0] = answer;
        displayResultEl.value = answer;
        numArray.pop();
        operations = true;
        operationLogic = 'divide';
        cummulativeResult.value = cummulativeResult.value.substring(
          0,
          cummulativeResult.value.length - 1
        );
        cummulativeResult.value = cummulativeResult.value + ' / ';
      }
    }
    operationChecked = true;
  }
});
clearAllEl.addEventListener('click', function () {
  operationLogic = 'none';
  displayResultEl.value = '0';
  operationPerformed = false;
  numArray = [];
  answer = 0;
  operations = false;
  operationChecked = true;
  cummulativeResult.value = '';
});
equalsEl.addEventListener('click', function () {
  if (
    operationPerformed &&
    displayResultEl.value !== '0' &&
    operationLogic !== 'none'
  ) {
    if (operationLogic === 'plus') {
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value += numArray[1];
      answer = numArray[0] + numArray[1];
      numArray[0] = answer;
      displayResultEl.value = answer;
      numArray.pop();
      operations = true;
      operationLogic = 'none';
    } else if (operationLogic === 'minus') {
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value += numArray[1];
      answer = numArray[0] - numArray[1];
      numArray[0] = answer;
      displayResultEl.value = answer;
      numArray.pop();
      operations = true;
      operationLogic = 'none';
    } else if (operationLogic === 'multiply') {
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value += numArray[1];
      answer = numArray[0] * numArray[1];
      numArray[0] = answer;
      displayResultEl.value = answer;
      numArray.pop();
      operations = true;
      operationLogic = 'none';
    } else {
      numArray.push(parseFloat(displayResultEl.value));
      cummulativeResult.value += numArray[1];
      answer = numArray[0] / numArray[1];
      numArray[0] = answer;
      displayResultEl.value = answer;
      numArray.pop();
      operations = true;
      operationLogic = 'none';
    }
    operationLogic = 'none';
    displayResultEl.value = answer;
    operationPerformed = false;
    numArray = [];
    answer = 0;
    operations = false;
    operationChecked = false;
    cummulativeResult.value = '';
    cycle = true;
  }
});
