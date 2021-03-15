import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width: 250px;
    height: 100%;
    background: #ffc500;
    display:grid;
    align-items:center;
    top:0;
    transition:0.3s ease-in-out;
    right: ${({ isOpen }) =>(isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px){
        width: 100%;
    }
`;
export const Icon = styled.div`
    color: #000;
`
export const CloseIcon = styled(FaTimes)`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;

`
export const SidebarMenu = styled.div`
    height: 100%;
    font-weight: 400;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 60px);
    text-align:center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat()(3, 40px);
    }

`
export const SidebarLink = styled(Link)`
    display:flex;
    align-items: left;
    justify-content: left;
    padding-left: 1.5rem;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;

    &:hover{
        color: #e31837;
        transition: 0.2s ease-in-out;
    }

`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SidebarRoute = styled(Link)`
    background: #e31837;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2 ease-in-out;
    text-decoration: none;
    &:hover {
        transition: 0.2s ease-in-ease-out;
        background: #fff;
        color: #010606;
    }
`