import styled from 'styled-components'
import FeaturePic from '../../images/featured1.jpg'

export const FeatureContainer = styled.div`
     background: linear-gradient(to right, rgba(0,0,0,0.8),rgba(0,0,0,0.3)), 
     url(${FeaturePic});
     height: 100vh;
     max-height: 400px;
     max-width:100vw;
     background-position: center;
     background-size:cover;
     display:flex;
     flex-direction: column;
     justify-content:center;
     align-items:center;
     color: #fff;
     text-align:center;
     padding: 0 1rem;
     box-shadow: inset 0 2px 4px rgba(23,19,13,0.7);
     

     h1{
         font-size: clamp(3rem, 5vw, 5rem);
         line-height:3rem;
         text-shadow: 0 0 20px rgba(255,255,255,0.4);
         margin-bottom:1.5rem;
     }
     p{
         
         margin-bottom:0.5rem;
         font-size: clamp(1rem, 3vw, 2rem);
     }
`
export const FeatureButton = styled.button`
    margin-top:1.2rem;
    font-size:1.4rem;
    padding: 0.6rem 3rem;
    border:none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
`
