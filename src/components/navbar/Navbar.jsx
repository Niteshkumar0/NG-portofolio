import React from 'react'
import './Navbar.css'
import {MdDarkMode} from 'react-icons/md'
const Navbar = () => {
  return (
    <div className=' navbar-layout'>
        <div className=' logo'>
            <h1>Nitesh Kumar</h1>
        </div>
        <div className='mode '>
            <h1><MdDarkMode/></h1>
        </div>
    </div>
  )
}

export default Navbar