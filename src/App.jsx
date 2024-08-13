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
    errorElement: <div><h1>404 Not found</h1></div>,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'about/:userId',
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
