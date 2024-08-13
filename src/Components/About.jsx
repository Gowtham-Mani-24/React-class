import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const {userId} = useParams();//hhok to get usesId

  return (
    <div>
      <h1>About page</h1>
      <p>Welcome to about page</p>
      <p>here is the user ID: {userId}</p>
    </div>
  )
}

export default About
