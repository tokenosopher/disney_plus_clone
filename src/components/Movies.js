import React from 'react';
import styled from 'styled-components';
import { selectMovies } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Movies = () => {

    const movies = useSelector(selectMovies);

    console.log("this is movies", movies)

    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                {movies &&
                    movies.map((movie) => (
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                                <img src={movie.cardImg} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}
export default Movies;

const Container = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
`
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 40px;
  margin-right: 10px;
  margin-left: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const Wrap = styled.div`
    //margin: 0 10px;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  
    img {
      width: 100%;
      height: 100%;
      object-fit:cover;
    }
  
    &:hover {
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
    }

    &:active {
      transform: scale(0.95)
    }
  
`