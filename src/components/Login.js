import React from 'react';
import styled from 'styled-components';

const Login = () => {

    return (
        <Container>
            <CTA>
                < CTALogoOne>
                    <img src={"/images/cta-logo-one.svg"} />
                </CTALogoOne>
                <LoginButton>
                    GET ALL HERE
                </LoginButton>
                <Description>
                    Get premier access to Raya and the Last Dragon for something something something with a subscription

                </Description>

                <CTALogoTwo>
                    <img src={"/images/cta-logo-two.png"} />
                </CTALogoTwo>
            </CTA>
        </Container>
    )
}
export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  //align items center is for placing all the child elements in the center vertically
  align-items: center;
  //justify content is for placing all of the child elements in the center horizontally
  justify-content: center;

  &:before {
    position: absolute;
    background-size: cover;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("/images/login-background.jpg") no-repeat top;
    z-index: -1;
`

const CTA = styled.div`
    display: flex;
    flex-direction: column;
    //center items horizontally
    align-items: center;
    max-width: 650px;
    //this is one good way to make the width dynamic. Another way would be to make it vw. 
    width: 90%;
`

const CTALogoOne = styled.div`
    width: 100%;
    
`

const LoginButton = styled.button`
  width: 100%;
  //make background color light blue:
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  transition: all 250ms;
  
  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`

const CTALogoTwo = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 90%;
  }
  
`
