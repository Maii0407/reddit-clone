import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';

import { database } from '/home/akmal-izuddin/Desktop/the-odin-project/reddit-clone/src/firebase-config';

import { CreatePost } from './CreatePost';
import { InitialContent } from './InitialContent';
import { FullPost } from './FullPost';

const MainContent = ( props ) => {
  const { user,
    addPost,
    postsArray,
    getPosts,
    getComments,
    addComment,
    commentsArray } = props;

    const postUpvote = async ( data ) => {
      try {
        await setDoc( doc( database, 'posts', `${ data.id }` ), {
          email: data.email,
          username: data.username,
          title: data.title,
          content: data.content,
          date: data.date,
          voteCount: ( data.voteCount + 1 ),
        })
      } catch( error ) {
        console.error( 'error in upvoting post' );
      }

      getPosts();
    };
  
    const postDownvote = async ( data ) => {
      try {
        await setDoc( doc( database, 'posts', `${ data.id }` ), {
          email: data.email,
          username: data.username,
          title: data.title,
          content: data.content,
          date: data.date,
          voteCount: ( data.voteCount - 1 ),
        })
      } catch( error ) {
        console.error( 'error in downvoting post' );
      }

      getPosts();
    };

  return (
    <MainContainer>
      <ContenContainer>
        <Routes>
          <Route path='/' element={ <InitialContent
          user={ user }
          postsArray={ postsArray }
          postUpvote={ postUpvote }
          postDownvote={ postDownvote }
          commentsArray={ commentsArray }/> } />
          <Route path='/submit' element={ <CreatePost addPost={ addPost } getPosts={ getPosts } /> } />
          { postsArray.map(( data ) => {
            return <Route key={ data.id } path={ `/comments/${ data.id }` }  element={ <FullPost
              data={ data }
              user={ user }
              postUpvote={ postUpvote }
              postDownvote={ postDownvote }
              addComment={ addComment }
              commentsArray={ commentsArray }
              getComments={ getComments }/> }/>
          }) }
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