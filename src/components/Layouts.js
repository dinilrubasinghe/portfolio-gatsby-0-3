import React from 'react'
import Navbar from './Navbar'

export default function Layouts({ children }) {
  return (
    <div className='layouts'>
        <Navbar/>
        <div className='content'>
          { children }
        </div>
    </div>
  )
}
