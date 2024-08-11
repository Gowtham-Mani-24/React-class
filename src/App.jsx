import React, { useState } from 'react'

function App() {
  const [count,updateCount] = useState(0);
  const [clicks,setCliks] = useState([]); 
  
  function incClick  ()  {
    //console.log('button is clicked');
    updateCount(count + 1);
    setCliks([...clicks, 'I']);
  }

  function decClick (){
    updateCount(count-1);
    setCliks([...clicks, 'D']);
  }

  function resClick (){
    updateCount(0);
    setCliks([...clicks, 'R']);
  }

  console.log(clicks);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incClick}>Increment</button>
      <button onClick={decClick}>Decrement</button>
      <button onClick={resClick}>Reset</button>
      <p>History:{clicks.join(', ')}</p>
    </div>
  )
}

export default App
