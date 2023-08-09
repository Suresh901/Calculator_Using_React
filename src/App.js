import './App.css';
import { useState } from 'react';
import * as math from 'mathjs';

function App() {
  const [result, setResult] = useState('');
  const [isCalculationDone, setIsCalculationDone] = useState(false);

  const handleClick = (e) => {
    if (isCalculationDone) {
      setResult(e.target.name);
      setIsCalculationDone(false);
    } else {
      setResult(result.concat(e.target.name));
    }
  };

  const clear = () => {
    setResult('');
    setIsCalculationDone(false);
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const output = () => {
    try {
      setResult(math.evaluate(result).toString());
      setIsCalculationDone(true);
    } catch (err) {
      setResult('Error');
      setIsCalculationDone(true);
    }
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={result} onChange={(e) => setResult(e.target.value)} />
      </form>
      <div className="keypad">
        <button onClick={clear} id="clear">
          Clear
        </button>
        <button onClick={backspace} id="backspace">
          <i className="fa-solid fa-delete-left"></i>
        </button>
        <button id= 'divide' name="/" onClick={handleClick}>
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button id= 'mul' name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button id= 'sub' name="-" onClick={handleClick}>
          -
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button id= 'add' name="+" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button id= 'output' onClick={output}> = </button>
        <button id= 'per' name="%" onClick={handleClick}>
          %
        </button>
      </div>
    </div>
  );
}

export default App;
