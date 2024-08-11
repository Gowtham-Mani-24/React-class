import React from 'react'
import B from './Components/B';


const App = () => {
  //1.create a function named fn
  //that takes as an argument
  const fn = (arg) =>{
    console.log(arg);
  }
  return (
    //2. Pass the funtion fn as a prop
      // to the component B
    <div>      
      <B 
      fn = {fn}
      />
    </div>
  )
}

export default App
