import React from 'react';
import styled from 'styled-components';

import appIcon from '/home/akmal-izuddin/Desktop/the-odin-project/reddit-clone/src/assets/smileyLogo.webp';

const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  background-color: #1b1b1b;
  border: 1px solid silver;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50% );
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  align-self: center;
  border-radius: 5px;
  border: 1px solid silver;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 60%;
  height: 30px;
  align-self: center;
  cursor: pointer;
  background-color: green;
  border: 1px solid silver;
  border-radius: 5px;
  margin-top: 50px;
  color: silver;
  font-weight: bold;
    &:hover {
      background-color: gainsboro;
      color: green;
      border: 1px solid green;
    }
`;

const Login = () => {
  const logo = {
    name: 'LOGO OF APP',
    icon: appIcon,
  };

  return (
    <Wrapper>
      <Image src={ logo.icon } alt={ logo.name } />
      <Button>SIGN-IN WITH GOOGLE</Button>
    </Wrapper>
  );
};

export { Login };