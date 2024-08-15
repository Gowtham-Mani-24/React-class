import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


  const router = createBrowserRouter([
    {
      path:'/',
      element:<h1>Hello Junga</h1>
    }
  ])

 function App() {
  return <RouterProvider router={router}/>
  
}

export default App;