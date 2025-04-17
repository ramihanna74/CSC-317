const display = document.getElementById('display');
const expressionDisplay = document.getElementById('expression');

let currentInput = '0';
let expression = '';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

const updateDisplay = () => {
  display.textContent = currentInput;
  expressionDisplay.textContent = expression;
};

const clear = () => {
  currentInput = '0';
  firstValue = null;
  operator = null;
  waitingForSecondValue = false;
  expression = '';
};

const toggleSign = () => {
  currentInput = String(parseFloat(currentInput) * -1);
};

const percent = () => {
  currentInput = String(parseFloat(currentInput) / 100);
};

const inputDigit = (digit) => {
  if (waitingForSecondValue) {
    currentInput = digit;
    waitingForSecondValue = false;
  } else {
    currentInput = currentInput === '0' ? digit : currentInput + digit;
  }
  expression += digit;
};

const inputDecimal = () => {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    expression += '.';
  }
};

const handleOperator = (nextOperator) => {
  const inputValue = parseFloat(currentInput);

  if (operator && waitingForSecondValue) {
    operator = nextOperator;
    expression = expression.slice(0, -3) + ` ${nextOperator} `;
    return;
  }

  if (firstValue == null && !isNaN(inputValue)) {
    firstValue = inputValue;
  } else if (operator) {
    const result = calculate(firstValue, inputValue, operator);
    currentInput = `${parseFloat(result.toFixed(10))}`;
    firstValue = result;
  }

  waitingForSecondValue = true;
  operator = nextOperator;
  expression += ` ${nextOperator} `;
};

const calculate = (first, second, operator) => {
  if (operator === '+') return first + second;
  if (operator === '-') return first - second;
  if (operator === '*') return first * second;
  if (operator === '/') return second === 0 ? 'Error' : first / second;
  return second;
};

document.querySelector('.buttons').addEventListener('click', (e) => {
  const target = e.target;
  const value = target.dataset.value;
  const action = target.dataset.action;

  if (!target.matches('button')) return;

  switch (action) {
    case 'clear':
      clear();
      break;
    case 'toggle-sign':
      toggleSign();
      break;
    case 'percent':
      percent();
      break;
    case 'operator':
      handleOperator(value);
      break;
    case 'equals':
      handleOperator(operator);
      operator = null;
      expression = '';
      break;
    default:
      if (value === '.') {
        inputDecimal();
      } else {
        inputDigit(value);
      }
      break;
  }
  updateDisplay();
});

document.addEventListener('keydown', (e) => {
  if (!isNaN(e.key)) {
    inputDigit(e.key);
  } else if (e.key === '.') {
    inputDecimal();
  } else if (e.key === 'Enter' || e.key === '=') {
    handleOperator(operator);
    operator = null;
    expression = '';
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    handleOperator(e.key);
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1) || '0';
    expression = expression.slice(0, -1);
  } else if (e.key.toLowerCase() === 'c') {
    clear();
  }
  updateDisplay();
});

updateDisplay();