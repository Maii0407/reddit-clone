import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { PostNav } from './PostNavBar';
import { CreatePost } from './CreatePost';
import { InitialContent } from './InitialContent';

const MainContent = ( props ) => {
  const { user, addPost } = props;
  return (
    <MainContainer>
      <ContenContainer>
        <Routes>
          <Route path='/' element={ <InitialContent user={ user }/> } />
          <Route path='/submit' element={ <CreatePost addPost={ addPost } /> } />
        </Routes>
      </ContenContainer>
      <InfoContainer/>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  justify-content: center;
`;

const ContenContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  width: 25%;
  height: 200px;
  background-color: #1b1b1b;
  border: 1px solid silver;
  border-radius: 5px;
  margin-left: 30px;
`;

export { MainContent };