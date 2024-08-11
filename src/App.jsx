import React, { useState } from 'react'

function App() {
  const [name,setName] = useState('Leo Dass');
  
  function handleClick  ()  {
    //console.log('button is clicked');
    setName('Antony Dass')
  }

  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>Update Name</button>
    </div>
  )
}

export default App
