import React from 'react';
import styled from 'styled-components';

const Detail = () => {

    return (
        <Container>
            <Background>
              <img src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2C42A74B2CCC3E1FEC11B09A3EFF12DEB1A29663740CDAEBB5EFC713B9F97235/scale?width=1920&aspectRatio=1.78&format=jpeg"} />
            </Background>

            <ImageTitle>
                <img src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2C5917FC19BF1C3380BE616572C129C282973BF087165533ED782E301ED7C4B8/scale?width=1440&aspectRatio=1.78"}/>
            </ImageTitle>

            <Controls>
                <PlayButton>
                    <img src={"/images/play-icon-black.png"} />
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src={"/images/play-icon-white.png"} />
                    <span>TRAILER</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>

                </AddButton>

                <GroupWatchButton>
                    <img src={"/images/group-icon.png"} />

                </GroupWatchButton>
            </Controls>

            <Subtitle>
                2018 · 7m · Family, Fantasy, Kids, Animation
            </Subtitle>

            <Description>
                A Chinese mom who's sad when her grown up son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>

        </Container>
    )
}
export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
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
  margin-top: 2vh;
  
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
  font-size: 24px;
  line-height: 1.4;
  color: rgb(249, 249, 249);
`