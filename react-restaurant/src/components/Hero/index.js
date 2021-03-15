import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
        HeroContainer,
        HeroContent,
        HeroItems,
        HeroH1,
        HeroP,
        HeroBtn,
        HeroSpan
} from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    };
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>The best <HeroSpan>Sushi</HeroSpan> shop</HeroH1>
                    <HeroP>Ready in 20 minutes</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero