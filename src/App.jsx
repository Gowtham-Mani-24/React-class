import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Users from './Components/Users';
import usersLoader from './Loaders/UsersLoader';


  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/notes',
      element: <div>Notes</div>
    },
    {
      path:'/users',
      loader: usersLoader,
      element: <Users />
    }
  ])

 function App() {
  return <RouterProvider router={router}/>
  
}

export default App;