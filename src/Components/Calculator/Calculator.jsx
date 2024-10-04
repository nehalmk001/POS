import React, {useState} from 'react'
import "../../css/Calculator.css"

const Calculator = () => {

    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
      if (value === '=') {
        try {
          setInput(eval(input).toString()); // Use `eval` to calculate the expression
        } catch {
          setInput('Error'); // Handle any error during evaluation
        }
      } else if (value === 'C') {
        setInput(''); // Clear the input
      } else {
        setInput(input + value); // Append input value
      }
    };


  return (
    <div className="mini-calculator">
      <div className="display-calcu">{input || "0"}</div>
      <div className="buttons-calcu">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((btn) => (
          <button className='mini-button' key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  )
}

export default Calculator