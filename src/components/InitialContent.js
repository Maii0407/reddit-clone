import React from 'react';
import styled from 'styled-components';

import { PostNav } from './PostNavBar';
import { Post } from './Post';

const InitialContent = ( props ) => {
  const { user, postsArray, addVote, minusVote } = props;

  return (
    <MainContainer>
      <PostNav user={ user } />
      <PostContainer>
        { postsArray.map(( doc ) => {
          return <Post key={ doc.id } doc={ doc } addVote={ addVote } minusVote={ minusVote } />
        }) }
      </PostContainer>
    </MainContainer>
  );
};

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
  margin-top: 20px;
`;

export { InitialContent };