import React from 'react'
import styled from 'styled-components'

function Contact() {
    return (
        <Container>
            <Heading>Contact Us</Heading>
            <Content>We would love to hear from you!. For any enquiries, feel free to drop us an email</Content>
            <p style={{marginBottom: 30}}>How can we help you?</p>

            <FormContainer>
                <InputContainer>
                    <h3>Leave us a message</h3>
                    <Input
                        type='text'
                        name='name'
                        placeholder="Your Name" />
                    <Input
                        type='text'
                        name='subject'
                        placeholder="Subject" />
                    <Input
                        type='email'
                        name='email'
                        placeholder="Your Email Address" />
                    <Input
                        type='text'
                        name='phone number'
                        placeholder="Your Phone Number" />
                    <Input
                        type='text'
                        name='message'
                        placeholder="Type your Message here...." />
                    <Input
                        type='submit'
                        style={{padding: '5px', backgroundColor: 'royalblue', color: '#fff'}}
                        value="Submit" />

                </InputContainer>
                <AddressContainer>
                    <h3>Drop by our Office</h3>
                    <p>Your Company name,</p>
                    <p>G2 Landing Park,</p>
                    <p>Random Street Name,</p>
                    <p>Post Code.</p>
                    <p>State.</p>
                        <p style={{marginBottom: 30}}> </p>
                    <p>Phone No: xx-xxxxxx,</p>
                    <p>Operation Time: </p>
                    <p>9:00 am - 5:30 pm (Mon - Sat)</p>
                    <p>Email: landing@gmail.com</p>
                </AddressContainer>
            </FormContainer>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    padding-block: 50px;
    padding-inline: 150px;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
        padding-inline: 20px;
    }
`;  

const Heading = styled.h2``;
const Content = styled.p`
    
`;
const FormContainer = styled.div`
    display: flex;

    @media (max-width: 768px){
        display: block;
    }
`;

const InputContainer = styled.form`
    flex-direction: column;
    width: 50%;

    @media (max-width: 768px){
        width: 100%;
    }

    h3 {
        font-size: 15px;
        font-weight: 700
    }
`;

const Input = styled.input`
    width: 80%;
    margin-left: -50px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    padding: 10px;
    outline: none;

    @media (max-width: 768px){
        width: 100%;
        margin-left: 0px;
    }

    &:focus {
        outline: 1px solid lightblue;
        transition: all 0.5s ease-in-out;
    }
`;

const AddressContainer = styled.div`
    width: 50%;
    text-align: left;
    padding-left: 30px;

    @media (max-width: 768px){
        width: 100%;
        
    }

    h3 {
        font-size: 15px;
        font-weight: 700;
    }

    p {
        margin-bottom: 0.1rem;
        
    }
`;