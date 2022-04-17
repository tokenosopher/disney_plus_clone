import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from "./Movies";

const Home = () => {

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
        </Container>
    )
}
export default Home;

//why main? Because browsers like to see main for the main component, according to Naz.
const Container = styled.main`
  //this allows you to calculate the rest of the height - the header
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  
  
  //top bottom left right 0 - it stretches the image across the parent div (in this case container)
  // z-index: -1 -> it moves the image behind everything.
  &:before {
    background: url("/images/home-background.png") center center / cover 
    no-repeat fixed;
    content: "";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: -1;
  }
`