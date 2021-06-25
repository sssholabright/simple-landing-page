import { Link } from '@material-ui/core';
import React, { useRef } from 'react'
import styled from 'styled-components'
import About from './About';
import Contact from './Contact';
import Pricing from './Pricing';

function Header() {    
    const pricingRef = useRef()
    const aboutRef = useRef()
    const contactRef = useRef()

    function pricingClick() {
        pricingRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    function aboutClick() {
        aboutRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    function contactClick() {
        contactRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    

    return (    
        <>
            <Container>
                <Logo>
                    Your Logo
                </Logo>
                <NavContainer>
                    <ul>
                        <Link style={{textDecoration: 'none'}} href='/'>
                            <li>Home</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} onClick={pricingClick} href='#pricing'>
                            <li>Pricing</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} onClick={aboutClick} href='#about'>
                            <li>About</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} onClick={contactClick} href='#contact'>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </NavContainer>
            </Container>
            <ImageContainer>
                <h1>Awesome Title</h1>
                <p>Placeholder for home page header</p>
                <span>Book Now!</span>
            </ImageContainer>
            <div ref={pricingRef}>
                <Pricing />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </>
    )
}

export default Header


const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    padding-block: 10px;
    padding-inline: 150px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    align-items: center;

    @media (max-width: 768px){
        padding-inline: 20px;
    }
`;

const NavContainer = styled.div`
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul li {
        margin-right: 30px;
        list-style: none;

        &:hover {
            cursor: pointer;
        }
    }
`;

const Logo = styled.div``;

const ImageContainer = styled.div`
    background-image: url('/slider 2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 80vh;
    margin-top: 0px;
    padding: 150px;
    text-align: center;

    @media (max-width: 768px){
        padding-inline: 20px;
    }

    h1 {
        color: #fff;
    }
    p {
        color: whitesmoke;
    }
    span {
        color: white;
        text-decoration: underline;
        cursor: pointer;
    }
`;