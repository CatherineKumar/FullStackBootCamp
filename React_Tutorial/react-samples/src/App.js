import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState( ()=>{return 0} );

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  } 

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  } 

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
