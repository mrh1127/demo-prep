import './styles.css';
import { Calculator } from './calculator.js';

const calculator = new Calculator();
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.number !== undefined) {
      calculator.appendNumber(button.dataset.number);
    } else if (button.dataset.action) {
      handleAction(button.dataset.action);
    }
    updateDisplay();
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') {
    calculator.appendNumber(e.key);
    updateDisplay();
  } else if (e.key === '.') {
    handleAction('decimal');
    updateDisplay();
  } else if (e.key === 'Enter' || e.key === '=') {
    e.preventDefault();
    handleAction('equals');
    updateDisplay();
  } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
    handleAction('clear');
    updateDisplay();
  } else if (e.key === 'Backspace') {
    handleAction('delete');
    updateDisplay();
  } else if (e.key === '+') {
    handleAction('add');
    updateDisplay();
  } else if (e.key === '-') {
    handleAction('subtract');
    updateDisplay();
  } else if (e.key === '*') {
    handleAction('multiply');
    updateDisplay();
  } else if (e.key === '/') {
    e.preventDefault();
    handleAction('divide');
    updateDisplay();
  } else if (e.key === '%') {
    handleAction('percentage');
    updateDisplay();
  }
});

function handleAction(action) {
  switch (action) {
    case 'clear':
      calculator.clear();
      break;
    case 'delete':
      calculator.delete();
      break;
    case 'percentage':
      calculator.percentage();
      break;
    case 'add':
      calculator.chooseOperation('+');
      break;
    case 'subtract':
      calculator.chooseOperation('-');
      break;
    case 'multiply':
      calculator.chooseOperation('*');
      break;
    case 'divide':
      calculator.chooseOperation('/');
      break;
    case 'decimal':
      calculator.appendNumber('.');
      break;
    case 'equals':
      calculator.compute();
      break;
  }
}

function updateDisplay() {
  display.textContent = calculator.getDisplayValue();
}
