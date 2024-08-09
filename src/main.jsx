import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
  {
    id:1,
    content:'HTML is easy',
    data:'2015-05-12',
    important:true
  },
  {
    id:2,
    content:'HTML is medium',
    data:'2015-06-12',
    important:false
  },
  {
    id:3,
    content:'HTML is Hard',
    data:'2015-07-12',
    important:true
  },
  {
    id:4,
    content:'HTML is Excellent',
    data:'2015-08-12',
    important:true
  },
]
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App
    notes = {notes} //props
    />
    
)
