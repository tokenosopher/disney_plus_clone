import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import db from '../firebase'
import { useParams } from "react-router-dom"
import {doc, getDoc } from "firebase/firestore";


const Detail = () => {

    const [currentMovie, setCurrentMovie] = useState("")


    //get the id from useParams
    const {id} = useParams();
    // console.log(id)



    useEffect(() => {

        async function getCurrentMovie() {
            let theMovie = await getDoc(doc(db, 'movies', id))
            setCurrentMovie(theMovie.data())
            console.log(currentMovie)
        } 
        getCurrentMovie()
        }
    , [])


    return (
        <Container>
            <Background>
              <img src={currentMovie.backgroundImg} />
            </Background>

            <ImageTitle>
                <img src={currentMovie.titleImg}/>
            </ImageTitle>

            <Controls>
                <PlayButton>
                    <img src={"../images/play-icon-black.png"} />
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src={"../images/play-icon-white.png"} />
                    <span>TRAILER</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>

                </AddButton>

                <GroupWatchButton>
                    <img src={"../images/group-icon.png"} />

                </GroupWatchButton>
            </Controls>

            <Subtitle>
                {currentMovie.subtitle}
            </Subtitle>

            <Description>
                {currentMovie.description}
            </Description>

        </Container>
    )
}
export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 80px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  margin-top:80px;
  overflow: hidden;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 4vh;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
  
const Controls = styled.div`
  display:flex;
  align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display:flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor:pointer;
  
    transition: background 0.2s ease-in-out;

  
    &:hover {
      background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  color: white;
  border: 1px solid white;
  text-transform: uppercase;
  
  //transition background:
  
  &:hover {
    //transition to a darker color:
    background: rgb(0, 0, 0, 0.8);
  }
`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid white;
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgba(0,0,0, 0.6);
  
`

const Subtitle = styled.div`
  margin-top: 26px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.77);
  
`

const Description = styled.div`
  margin-top: 20px;
  max-width: 700px;
  font-size: 24px;
  line-height: 1.4;
  color: rgb(249, 249, 249);
`