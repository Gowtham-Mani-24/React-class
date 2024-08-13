import React from 'react'
import { Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>                
                <a href="/about">About</a>
            </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Navigation
