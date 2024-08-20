import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Users = () => {
  
  const users = useLoaderData();
   
    return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
            <tr></tr>
        </thead>
      </table>
    </div>
  )
}

export default Users
