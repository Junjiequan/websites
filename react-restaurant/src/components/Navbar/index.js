import React from 'react'
import { Nav_container, NavLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav_container>
                <NavLink to ='/'>Pizza</NavLink>
            </Nav_container>
        </>
    );
};
export default Navbar;