import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PostNav = ( props ) => {
  const navigate = useNavigate();

  const { user } = props;
  return (
    <Container>
      <ProfilePic src={ user.photoURL } alt='pic' />
      <TextArea type='text' placeholder='Create Post' onClick={ () => { navigate( '/submit' ) } } />
      <PlusBtn onClick={ () => { navigate( '/submit' ) } }>+</PlusBtn>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #1b1b1b;
  border: 1px solid silver;
  border-radius: 5px;
`;

const ProfilePic = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid silver;
  cursor: pointer;
`;

const TextArea = styled.input`
  width: 75%;
  height: 35px;
  background-color: transparent;
  color: silver;
  border: 1px solid silver;
  border-radius: 5px;
  text-indent: 10px;
  font-size: 15px;
  &:hover {
    border: 1px solid white;
    background-color: black;
  }
`;

const PlusBtn = styled.button`
  width: 35px;
  height: 35px;
  background-color: transparent;
  color: silver;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba( 0, 0, 0, 0.4 );
    border: 1px solid silver;
  }
`;

export { PostNav };