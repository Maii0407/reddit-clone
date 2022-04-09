import React from 'react';
import styled from 'styled-components';

import appIcon from '/home/akmal-izuddin/Desktop/the-odin-project/reddit-clone/src/assets/smileyLogo.webp';

const Wrapper = styled.div`
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

const Button = styled.button`
width: 15%;
height: 35px;
align-self: center;
cursor: pointer;
background-color: red;
border: 1px solid silver;
border-radius: 20px;
color: white;
font-weight: bold;
  &:hover {
    background-color: gainsboro;
    color: red;
    border: 1px solid red;
  }
`;

const NavBar = ( props ) => {
  const logo = {
    name: 'LOGO OF APP',
    icon: appIcon,
  };

  const { signOutUser } = props;

  return (
    <Wrapper>
      <Logo src={ logo.icon } alt={ logo.name }/>
      <Header>readTHAT</Header>
      <SearchBar type='text' placeholder='Search Readthat' />
      <Button onClick={ signOutUser } >SIGN OUT</Button>
    </Wrapper>
  );
};

export { NavBar }