import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom'
import {WebState} from './Webstate'

const NavBar = () => {
    const context = useContext(WebState);
    const {navState} = context

    return (
                <div className={navState}>
                        <NavLink exact to="/home" className="title" >Pallet Sound</NavLink>
                    <div className="links" >
                        <NavLink exact to='/media' className="linkItems" >Media</NavLink>
                        <NavLink exact to='/contact' className="linkItems">Contact</NavLink>
                    </div>
                </div>

    )

}

export default NavBar