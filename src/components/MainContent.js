import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { PostNav } from './PostNavBar';
import { CreatePost } from './CreatePost';

const MainContent = ( props ) => {
  const { user } = props;
  return (
    <MainContainer>
      <Routes>
        <Route path='/' element={ <PostNav user={ user }/> } />
        <Route path='/submit' element={ <CreatePost/> } />
      </Routes>
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

export { MainContent };