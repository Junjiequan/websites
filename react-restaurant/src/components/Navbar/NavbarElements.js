import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiSushis } from 'react-icons/gi';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display:flex;
    justify-content:center;
    font-weight: 700;
`;
export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    font-weight:400;
    font-family: 'Permanent Marker', cursive;
    text-shadow: 0 0 3px black;

    @media screen and (max-width: 400px){
        position: absolute;
        top: 15px;
        left: 25px;
        font-size:2rem;
    }
`;
export const NavIcon = styled.div`
    font-weight:500;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;
    p {
        transform: translate(-130%,100%);
        background-color: rgba(0,0,0,0.9);
        padding: 0.1rem 0.5rem;

    }
`
export const Bars = styled(GiSushis)`
    font-size: 2rem;
    transform: translate()(-50%, -15%);
`