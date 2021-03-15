import React from 'react'
import Navbar from '../Navbar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn, HeroSpan} from './HeroElements'

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest <HeroSpan>Sushi</HeroSpan> Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
