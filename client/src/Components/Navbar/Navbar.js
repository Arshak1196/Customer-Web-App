import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='header'>
            <div className="logo">
                <p>Project Name</p>
            </div>
            <div className='header-button'>
                <span className='button1'>Customer Admin</span>
                <span> User #01</span>
            </div>

        </div>
    )
}

export default Navbar