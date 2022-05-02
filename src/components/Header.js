import React, {useEffect} from 'react';
import styled from 'styled-components';
import {auth, provider} from "../firebase";
import {signInWithPopup, signOut} from "firebase/auth";
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

import {
    selectName,
    selectEmail,
    selectProfilePhoto,
    setSignIn,
    setSignOut
} from "../features/user/userSlice";

import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const profilePhoto = useSelector(selectProfilePhoto);

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setSignIn({
                    name: user.displayName,
                    email: user.email,
                    profilePhoto: user.photoURL
                }))
                history.push("/")
            }
        })
    })


    const currentSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result)=>{
                dispatch(setSignIn({
                    name: result.user.displayName,
                    email: result.user.email,
                    profilePhoto: result.user.photoURL
                }))
                console.log(result.user.displayName)
                console.log(result.user.email)
                console.log(result.user.photoURL)
                history.push("/")
        })
    }

    const currentSignOut =() => {
        signOut(auth)
            .then(()=>{
                dispatch(setSignOut())
                history.push("/login")
            })
    }


    return (
        <Nav>
            <Logo src = "/images/logo.svg" />
            {!name ? (
                <>
                    <LoginWrapper>
                        <Login onClick={currentSignIn}>
                            Login
                        </Login>
                    </LoginWrapper>
                </>
            ) :
                (
                    <>
                        <NavMenu>
                            <a href={"/"}>
                                <img src={"/images/home-icon.svg"} />
                                <span>HOME</span>
                            </a>

                            <a>
                                <img src={"/images/search-icon.svg"} />
                                <span>SEARCH</span>

                            </a>

                            <a>
                                <img src={"/images/watchlist-icon.svg"} />
                                <span>WATCHLIST</span>
                            </a>

                            <a>
                                <img src={"/images/original-icon.svg"} />
                                <span>ORIGINALS</span>
                            </a>

                            <a>
                                <img src={"/images/movie-icon.svg"} />
                                <span>MOVIES</span>
                            </a>

                            <a>
                                <img src={"/images/series-icon.svg"} />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <LogoutWrapper>
                            <UserImg src={profilePhoto}/>
                            <LogoutPopup onClick={currentSignOut}>
                                Logout
                            </LogoutPopup>
                        </LogoutWrapper>
                    </>
                )
            }
        </Nav>
    )
}
export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`

const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
  //this makes it so that the nav menu is the most important item, so it expands the most.
    flex: 1;
  //provide some spacing:
    margin-left: 25px;
  //align items center centers things vertically:
  align-items: center;
  
  //hide the nav menu on small screens:
  @media (max-width: 864px) {
    display: none;
  }
  
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor:pointer;
    
    img {
        height: 20px;
    }
    
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      
      //would be worth checking how transitions and transform work:
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
    
  }
`

const UserImg = styled.img`
  width:48px;
  height:48px;
  border-radius: 50%;
`

const Login =styled.div`
    //create a border:
    border: 1px solid white;
    padding: 6px 12px;
    letter-spacing: 1.5px;
    border-radius: 4px;
    transition: all 250ms;
    &:hover {
      background-color: rgb(249,249,255);
      border-color: transparent;
      color: #040714;
     
    }
    cursor: pointer;
    //make text upper case:
    text-transform: uppercase;
    

`

const LoginWrapper = styled.div`
  display: flex;
  flex:1;
  //place the login button on the right:
  justify-content: flex-end;
  
`

//make the logout popup be over everything else:
const LogoutPopup = styled.div`
  position: absolute;
  top: 60px;
  right: -10px;
  background-color: #040714;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  transition: all 250ms;
  opacity: 0;

  &:hover {
    background-color: #f9f9ff;
    color: #000000;
  }
  
  cursor: pointer;
  
  
`

const LogoutWrapper = styled.div`
  display: flex;
  flex:1;
  //place the login button on the right:
  justify-content: flex-end;
  position:relative;
  overflow: visible;
  &:hover {
    ${LogoutPopup} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`