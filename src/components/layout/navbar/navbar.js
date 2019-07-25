import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const Navigation = styled('div')`
display: flex; 
@media (min-width: 768px) {
    order: 2;
}
`;
const HamburgerMenu = styled('div')`
width: 25px;
height: 13px;
border-top 3px solid #000000;
background: transparent;
position: relative;
margin-right: 15px;
&:after, &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 3px solid #000000;
    transform: translateY(3px);
}
&:before {
    transform: translateY(9px);
}
@media (min-width: 768px) {
    display:none;
  }
`;
const Nav = styled('nav')`
display:none;
@media (min-width: 768px) {
    display: flex;
}
`;
const MenuList = styled('ul')`
@media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    > a {
        margin-right: 15px;
        cursor: pointer;
    }
}
`;

const Navbar = () => {
    return (
        <Navigation>
            <HamburgerMenu/>
            <Nav>
                <MenuList>
                    <NavLink to='/'>Main Page 1</NavLink>
                    <NavLink to='/'>Main Page 2</NavLink>
                    <NavLink to='/'>Main Page 3</NavLink>
                </MenuList>
            </Nav>
        </Navigation>
    )
};

export default Navbar;