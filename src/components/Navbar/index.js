import React from 'react'
import './index.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='nav-links'>
                <div className='nav-link-con'>
                    <a href='/' className='nav-link'>
                        <img src='https://cdn.pixabay.com/photo/2016/03/22/04/23/map-1272165_960_720.png' alt='home' className='link-icon' />
                    </a>
                </div>
                <div className='nav-link-con'>
                    <a href='/agents'>
                        <img src='hotspot.png' alt='hotspot' className='link-icon' />
                    </a>
                </div>
                <div className='nav-link-con'>
                    <a href='/'>
                        <img src='settings.png' alt='testing' className='link-icon' />
                    </a>
                </div>
                <div className='nav-link-con'>
                    <a href='/'>
                        <img src='statistics.png' alt='home' className='link-icon' />
                    </a>
                </div>
                <div className='nav-link-con'>
                    <a href='/'>
                        <img src='https://www.clipartmax.com/png/middle/434-4349876_profile-icon-vector-png.png' alt='profile' className='link-icon' />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Navbar