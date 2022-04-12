import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import appIcon from '/home/akmal-izuddin/Desktop/the-odin-project/reddit-clone/src/assets/smileyLogo.webp';
import expandArrow from '/home/akmal-izuddin/Desktop/the-odin-project/reddit-clone/src/assets/outline_expand_more_white_24dp.png';

const NavBar = ( props ) => {
  const { signOutUser, user, getPosts } = props;
  const logo = { name: 'LOGO OF APP', icon: appIcon };
  const navigate = useNavigate();

  const [ logOutBtn, SetLogOutBtn ] = useState( false );

  const showLogOutBtn = () => {
    if( logOutBtn === false ) {
      return SetLogOutBtn( true );
    } 

    return SetLogOutBtn( false );
  };

  useEffect(() => {
    if( logOutBtn === true ) {
      document.getElementById( 'logOut-btn' ).style.display = 'block';
    } else {
      document.getElementById( 'logOut-btn' ).style.display = 'none';
    }
  }, [ logOutBtn ]);

  return (
    <Container>
      <LogoContainer onClick={ getPosts } >
        <Logo src={ logo.icon } alt={ logo.name }/>
        <Header>readTHAT</Header>
      </LogoContainer>
      <SearchBar type='text' placeholder='Search Readthat' />
      <Dropdown>
        <ProfileContainer onClick={ showLogOutBtn } >
          <ProfileImages src={ user.photoURL } alt='PfP' />
          <UserName>{ user.displayName }</UserName>
          <ProfileImages src={ expandArrow } alt='expand arrow' />
        </ProfileContainer>
        <DropdownBtn id='logOut-btn' onClick={ signOutUser }>LOG OUT</DropdownBtn>
      </Dropdown>
      

    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1b1b1b;
  border-bottom: 1px solid silver;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 100%;
`;

const Header = styled.h1`
  color: silver;
  font-size: 30px;
  align-item: center;
  margin-left: 5px;
`;

const SearchBar = styled.input`
  width: 50%;
  height: 35px;
  background-color: transparent;
  color: silver;
  margin-left: 50px;
  margin-right: 50px;
  border: 1px solid silver;
  border-radius: 5px;
  text-indent: 20px;
  &:hover {
    border: 1px solid white;
    background-color: black;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const ProfileImages = styled.img`
  width: 30px; 
  height: 30px;
  border-radius: 5px;
  margin-right: 10px;
`;

const UserName = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

const Dropdown = styled.div`
  width: 20%;
  position: relative;
  border: 1px solid #1b1b1b;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 20px;
    &:hover {
      border: 1px solid silver;
    }
`;

const DropdownBtn = styled.div`
  width: 100%;
  height: 35px;
  display: none;
  text-align: center;
  line-height: 35px;
  background-color: #1b1b1b;
  border: 1px solid silver;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  font-weight: bold;
  cursor: pointer;
    &:hover {
      background-color: silver;
      color: #1b1b1b;
    }
`;

export { NavBar }