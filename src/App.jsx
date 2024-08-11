import React, { useState } from 'react'
import B from './Components/B';


const App = () => {
  const [name, setName] = useState('');
  //1.create a function named fn
  //that takes as an argument
  const fn = (arg) =>{
    // console.log(arg);
    setName(arg);
  }
  return (
    //2. Pass the funtion fn as a prop
      // to the component B
    <div>      
      <p>Data from child: {name}</p>
      <B 
      fn = {fn}
      />
    </div>
  )
}

export default App
