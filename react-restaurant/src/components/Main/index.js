import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
        MainContainer,
        MainContent,
        MainItems,
        MainH1,
        MainP,
        MainBtn,
        MainSpan
} from './MainElements'

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    };
    return (
        <MainContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <MainContent>
                <MainItems>
                    <MainH1>The best <MainSpan>Sushi</MainSpan> shop</MainH1>
                    <MainP>Ready in 20 minutes</MainP>
                    <MainBtn>Place Order</MainBtn>
                </MainItems>
            </MainContent>
        </MainContainer>
    )
}

export default Main
