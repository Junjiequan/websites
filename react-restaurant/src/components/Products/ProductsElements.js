import styled from 'styled-components'

export const ProductsContainer = styled.div`
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    padding: 3rem calc((100vw - 1300px) /2);
    background: #150f0f;
    box-shadow: 0 -2px 4px rgba(23,19,13,0.7);
    color:#fff;
`
export const ProductWrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    flex-wrap: wrap;
    margin: 0 auto;

    @media screen and (max-width:480px){
        grid-template-columns:1fr;
        grid-template-rows: repeat(6, auto);
    }
    @media screen and (min-width:720px){
        grid-template-columns:1fr 1fr;
        grid-template-rows: repeat(6, auto);
    }
    @media screen and (min-width:1100px){
        grid-template-columns:1fr 1fr 1fr;
        grid-template-rows: repeat(6, auto);
    }
`
export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    max-width: 300px;
    min-width:200px;
    margin-bottom: 1.5rem;
`
export const ProductImg = styled.img`
    min-height:200px;
    min-width:200px;
    max-width:100%;
    box-shadow: 8px 8px #fdc500;
`
export const ProductHeading = styled.h1`
font-size: clamp(2rem, 2.5vw, 3rem);
margin-bottom: 3rem;
text-align:center;
font-weight:bold;
`
export const ProductTitle = styled.h2`
    font-weight: bold;
    font-size:1.5rem;
`
export const ProductInfo = styled.div`
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   padding: 1rem;
   text-align:center;
`
export const ProductDesc = styled.p`
    margin-bottom:0.5rem;
`
export const ProductPrice = styled.p`
    margin-bottom:0.5rem;
    font-size:2rem;
`
export const ProductButton = styled.button`
    font-size:1rem;
    padding:1rem 4rem;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-in-out;
    border: none;

    &:hover{
        background: #ffc500;
        transition: 0.2s ease-in-out;
        cursor:pointer;
        color:#000;
    }
`