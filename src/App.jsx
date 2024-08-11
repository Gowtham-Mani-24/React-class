import React, { useState } from 'react'

function App() {
  const [count,updateCount] = useState(0);
  
  function incClick  ()  {
    //console.log('button is clicked');
    updateCount(count + 1);
  }

  function decClick (){
    updateCount(count-1);
  }

  function resClick (){
    updateCount(0);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incClick}>Increment</button>
      <button onClick={decClick}>Decrement</button>
      <button onClick={resClick}>Reset</button>
    </div>
  )
}

export default App
