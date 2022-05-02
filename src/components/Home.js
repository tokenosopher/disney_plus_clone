import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from "./Movies";
import {collection, getDocs, getDoc} from "firebase/firestore";
import db from '../firebase'
import {onSnapshot} from "firebase/firestore"
//redux related imports:
import {useDispatch }  from "react-redux";
import { setMovies } from "../features/movies/movieSlice";

import { nanoid } from "@reduxjs/toolkit";


const Home = () => {
    // const [movies, setMovies] = useState([]);

    const dispatch = useDispatch();


    useEffect(
        () =>
            onSnapshot(collection(db, "movies"), (snapshot) =>
                // setMovies(snapshot.docs.map((doc) => doc.data()))
                dispatch(
                    setMovies(
                    snapshot.docs.map((doc) =>
                    {return {id: doc.id, ...doc.data()}}
                        )
                    )
                )
            ),
        []
    );


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

  overflow-x: hidden;
  top: 72px;
  //this allows you to calculate the rest of the height - the header
  min-height: calc(100vh - 70px);
  padding: calc(3.5vw + 5px);
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