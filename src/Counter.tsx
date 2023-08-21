import * as React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCounter] = useState(0);

  function Increase() {
    setCounter(count + 1);
  }
  function Decrease() {
    if(count>0)
    {    setCounter(count - 1);
    }
    }
  return (
    <>
      <div>{count}</div>
      <button onClick={Increase}>Add</button>
      <button onClick={Decrease}>Delete</button>
    </>
  );
}
export default Counter;
