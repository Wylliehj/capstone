import React from 'react'
import {Navbar, Nav, NavItem} from 'reactstrap'; 
import {NavLink} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return(
        <div className='nav-bar'>
            <Navbar expand='md'>
                <NavLink exact to='/' className='navbar-brand'>
                    The Bestaurant
                </NavLink>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink to='/menu'>Menus</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/about'>About Us</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar