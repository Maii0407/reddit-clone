import React from 'react';
import styled from 'styled-components';

import appIcon from '/home/akmal-izuddin/Desktop/the-odin-project/reddit-clone/src/assets/smileyLogo.webp';
import expandArrow from '/home/akmal-izuddin/Desktop/the-odin-project/reddit-clone/src/assets/outline_expand_more_white_24dp.png';

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
  margin-left: 10px;
`;

const SearchBar = styled.input`
  width: 50%;
  height: 35px;
  margin-left: 50px;
  margin-right: 50px;
  border: 1px solid silver;
  border-radius: 5px;
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 35px;
  border: 1px solid silver;
  border-radius: 5px;
  padding-left: 20px;
  cursor: pointer;
`;

const ProfileImages = styled.img`
  width: 30px; 
  height: 30px;
  border-radius: 5px;
  margin-right: 10px;
`;

const ArrowIcon = styled( ProfileImages )`
  margin-left: 20px;
`;

const UserName = styled.p`
  font-size: 15px;
`;

const NavBar = ( props ) => {
  const { signOutUser, user } = props;

  const logo = {
    name: 'LOGO OF APP',
    icon: appIcon,
  };

  return (
    <Container>
      <Logo src={ logo.icon } alt={ logo.name }/>
      <Header>readTHAT</Header>
      <SearchBar type='text' placeholder='Search Readthat' />
      <ProfileContainer onClick={ signOutUser } >
        <ProfileImages src={ user.photoURL } alt='user photo'/>
        <UserName>{ user.displayName }</UserName>
        <ArrowIcon src={ expandArrow } alt='expand arrow' />
      </ProfileContainer>
    </Container>
  );
};

export { NavBar }