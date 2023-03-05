import { useState } from 'react';
import './App.css';

function App() {
  const [inpvalue, setinpvalue] =  useState("");
  const [result, setResult] =useState("0");
  
  const calculate=(e)=>{
    setinpvalue(e.target.value);
  }

  return (
    <div >
        <div className='inputs'>
          <input type="text" value={inpvalue} name="input" onChange={calculate} placeholder="Type here"></input>
          <p>{result}</p>
        </div>
        <div className='ac'>
        <button onClick={()=>{setinpvalue("")
      setResult(0)}}>AC</button>
      </div>
      <div className='buttons'>
        <button onClick={()=>{setinpvalue(inpvalue+"1")}}>1</button>
        <button onClick={()=>{setinpvalue(inpvalue+"2")}}>2</button>
        <button onClick={()=>{setinpvalue(inpvalue+"3")}}>3</button>
        <button onClick={()=>{setinpvalue(inpvalue+"/")}}>/</button>
      </div>
      <div className='buttons'>
        <button onClick={()=>{setinpvalue(inpvalue+"4")}}>4</button>
        <button onClick={()=>{setinpvalue(inpvalue+"5")}}>5</button>
        <button onClick={()=>{setinpvalue(inpvalue+"6")}}>6</button>
        <button onClick={()=>{setinpvalue(inpvalue+"*")}}>*</button>
      </div>
      <div className='buttons'>
        <button onClick={()=>{setinpvalue(inpvalue+"7")}}>7</button>
        <button onClick={()=>{setinpvalue(inpvalue+"8")}}>8</button>
        <button onClick={()=>{setinpvalue(inpvalue+"9")}}>9</button>
        <button onClick={()=>{setinpvalue(inpvalue+"-")}}>-</button>
      </div>
      <div className='buttons'>
        <button onClick={()=>{setinpvalue(inpvalue+"0")}}>0</button>
        <button onClick={()=>{setinpvalue(inpvalue+".")}}>.</button>
        <button onClick={()=>{setResult(eval(inpvalue));}}>=</button>
        <button onClick={()=>{setinpvalue(inpvalue+"+")}}>+</button>
      </div>
    </div>
  );
}

export default App;
