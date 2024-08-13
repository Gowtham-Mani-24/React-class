import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Navigation from './Components/Navigation'

// create a router object

const router = createBrowserRouter([
  {
    path:'/',
    element:<Navigation />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'about',
        element:<About />
      }
    ]
  },
  
])

const App = () => {
  return (
    
      <RouterProvider router={router}/>
  
  )
}

export default App
