import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import YoutubeIcon from '@material-ui/icons/YouTube'
import { Link } from '@material-ui/core'


function Footer() {
    return (
        <Container>
            <FooterNav>
                <Nav>
                    <Link href='#'>
                        <List>Home</List>
                    </Link>
                    <Link href='#'>
                        <List>About Us</List>
                    </Link>
                    <Link href='#'>
                        <List>Contact Us</List>
                    </Link>
                </Nav>
                <Icons>
                    <Link href='#'>
                        <Facebooks />
                    </Link>
                    
                    <Link href='#'>
                        <Twitters />
                    </Link>
                   
                    <Link href='#'>
                        <Instagrams />
                    </Link>
                    
                    <Link href='#'>
                        <LinkedIns />
                    </Link>
                   
                    <Link href='#'>
                        <Youtubes />
                    </Link>                    
                </Icons>
            </FooterNav>
            <CopyRight>
                &copy; Your CompanyName. All rights reserved
            </CopyRight>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    background-color: slateblue;
    padding-inline: 150px;
    padding-block: 20px;
    color: #fff;

    @media (max-width: 768px) {
        padding-inline: 20px;
    }
`;

const FooterNav = styled.div`
    text-align: center;
`;

const Nav = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        text-decoration: none;
    }
`;

const List = styled.li`
    margin-left: 20px;
    list-style: none;
    color: #fff;
`;

const Icons = styled.div`
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        margin-left: 50px;
    }
`;

const Facebooks = styled(FacebookIcon)`
    margin-right: 10px;
    color: #fff;
`;
const Instagrams = styled(InstagramIcon)`
    margin-right: 10px;
    color: #fff;
`;
const LinkedIns = styled(LinkedInIcon)`
    margin-right: 10px;
    color: #fff;
`;
const Youtubes = styled(YoutubeIcon)`
    margin-right: 10px;
    color: #fff;
`;
const Twitters = styled(TwitterIcon)`
    margin-right: 10px;
    color: #fff;
`;

const CopyRight = styled.p`
    text-align: center;
`;
