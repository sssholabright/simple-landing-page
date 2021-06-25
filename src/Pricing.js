import React from 'react'
import styled from 'styled-components'

function Pricing() {
    return (
        <Container>
            <PricingItem>
                <p>Basic</p>
                <p id='class'>$9.99 / year</p>
                <p id='white'>12 consultation sessions</p>
                <p id='white'>1 user</p>
                <p id='white'>Same day audit logs</p>
            </PricingItem>
            <PricingItem>
                <p id="two">Pro</p>
                <p id='class'>$24.99 / year</p>
                <p id='white'>Unlimited consultation</p>
                <p id='white'>10 - 25 user</p>
                <p id='white'>7 days Audit logs</p>
            </PricingItem>
            <PricingItem>
                <p>Premium</p>
                <p id='class'>$49.99 / year</p>
                <p id='white'>Unlimited consultation</p>
                <p id='white'>Unlimited users</p>
                <p id='white'>Audit logs with full history</p>
            </PricingItem>
        </Container>
    )
}

export default Pricing


const Container = styled.div`
    padding-inline: 150px;
    padding-block: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    @media (max-width: 768px) {
        display: block;
        padding-inline: 20px;
    }
`;

const PricingItem = styled.div`
    width: 32%;
    p {
        background-color: black;
        color: whitesmoke;
        padding: 10px;
    }

    #class {
        background-color: lightgray;
        color: whitesmoke;
        color: #000000;
        padding: 10px;
        margin-top: -10px;
    }

    #white {
        margin-top: -10px;
        background-color: #fff;
        color: #000000;
        border: 1px solid whitesmoke;
    }

    #two {
        background-color: royalblue;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
    }
`;
