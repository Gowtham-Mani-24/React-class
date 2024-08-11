import React, { useEffect, useState } from 'react'

const B = ({fn}) => {
    //data need to pass to parent component
    const [name,setName] = useState('Leo Dass');

    //3. Call the function fn with an argument
    useEffect(()=>{
        fn(name);
         }, [name]
);
    
const handleChange = (e) => {
    setName(e.target.value);
}
 

  return (
    <div>
      <input
      value={name}
      onChange={handleChange}
      />
    </div>
  )
}

export default B
