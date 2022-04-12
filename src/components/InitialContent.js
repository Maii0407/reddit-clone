import React from 'react';
import styled from 'styled-components';

import { PostNav } from './PostNavBar';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InitialContent = ( props ) => {
  const { user } = props;

  return (
    <MainContainer>
      <PostNav user={ user } />
      <PostContainer/>
    </MainContainer>
  );
};

export { InitialContent };