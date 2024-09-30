import { useState } from 'react';

export default function useCalculator() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [previewResult, setPreviewResult] = useState("");

  function calculator(expression) {
    const operators = ['+', '-', 'x', '÷'];
    const numbers = [];
    const ops = [];

    let currentNumber = '';

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      if (operators.includes(char)) {
        numbers.push(parseFloat(currentNumber));
        ops.push(char);
        currentNumber = '';
      } else if (char !== ' ') {
        currentNumber += char;
      }
    }

    if (currentNumber !== '') numbers.push(parseFloat(currentNumber)); 

    while (ops.includes('x') || ops.includes('÷')) {
      const index = ops.findIndex(op => op === 'x' || op === '÷'); 
      const operator = ops[index];
      const result = operator === 'x' ? numbers[index] * numbers[index + 1] : numbers[index] / numbers[index + 1];

      numbers.splice(index, 2, result); 
      ops.splice(index, 1); 
    }

    let result = numbers[0];
    for (let i = 0; i < ops.length; i++) {
      const operator = ops[i];
      const nextNumber = numbers[i + 1];

      if (operator === '+') result += nextNumber;
      if (operator === '-') result -= nextNumber;
    }

    return result.toString();
  }

  function handleInput(buttonPressed) {
    if (['+', '-', 'x', '÷'].includes(buttonPressed)) {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ");
      setPreviewResult(""); 
      return;
    }

    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        setPreviewResult(""); 
        return;
      case 'AC':
        setCurrentNumber("");
        setPreviewResult(""); 
        return;
      case '=':
        const result = calculator(currentNumber);
        setCurrentNumber(result);
        setPreviewResult(""); 
        return;
      case '+/-':
        if (currentNumber) {
          setCurrentNumber((prev) => (parseFloat(prev) * -1).toString());
        }
        return;
      case '.':
        const lastPart = currentNumber.split(' ').pop(); 
        if (lastPart.includes('.')) return; 
        break;
    }

    const newNumber = currentNumber + buttonPressed;
    setCurrentNumber(newNumber);

    if (newNumber.match(/[-+x÷]/) && !newNumber.endsWith(' ') && !newNumber.endsWith('-')) {
        const preview = calculator(newNumber);
        setPreviewResult(preview);
    }
  }

  return {
    currentNumber,
    previewResult,
    handleInput,
  };
}
