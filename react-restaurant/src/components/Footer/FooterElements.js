import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #0D0904;
`
export const FooterWrap = styled.div`
    padding: 2rem 2rem;
    display:flex;
    justify-content: center;
    align-items:center;
    max-width: 1300px;
    margin: 0 auto;
`
export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width:1200px;
    margin: 1rem auto 0 auto;
    @media screen and (max-width:820px){
     flex-direction:column;
}
`
export const SocialLogo = styled(Link)`
    font-family: 'Permanent Marker', cursive;
    color: #fff;
    justify-self:flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: 900;
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:80px;
`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 2rem;
`
