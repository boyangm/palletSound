import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
                <div className="navbar">
                    <div className="links" >
                        <NavLink exact to="/home" className="linkItems" >Home</NavLink>
                        <NavLink exact to='/media' className="linkItems" >Media</NavLink>
                        <NavLink exact to='/contact' className="linkItems">Contact</NavLink>
                    </div>
                </div>

    )

}

export default NavBar