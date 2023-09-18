import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav_container'>
        <div className="nav_left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfLEY6ExmV2Pm8bjWZibiY8_1jr14-wD82w&usqp=CAU" alt="" />
            <span>NGO Ethiopia</span>
        </div>
        <div className="nav_right">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Contacts</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
