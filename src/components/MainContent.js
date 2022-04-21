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
          <Route path='/reddit-clone' element={ <InitialContent
          user={ user }
          postsArray={ postsArray }
          postUpvote={ postUpvote }
          postDownvote={ postDownvote }
          commentsArray={ commentsArray }/> } />
          <Route path='/reddit-clone/submit' element={ <CreatePost addPost={ addPost } getPosts={ getPosts } /> } />
          { postsArray.map(( data ) => {
            return <Route key={ data.id } path={ `/reddit-clone/comments/${ data.id }` }  element={ <FullPost
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
      <InfoContainer>
        <InfoHead>readTHAT</InfoHead>
        <InfoPara>
          Welcome to readTHAT! A reddit clone that I build. Play around with the app a bit. This app is build as a project
          to finish up the Javascript lessons in The Odin Project curriculum. As a learning experience, this app was pretty
          challenging and also fun to build. The app is build using React as the frontend in addition with styled-components
          in styling the app and for the backend of the app, I used Firebase.
        </InfoPara>
      </InfoContainer>
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
  height: 100%;
  background-color: #1b1b1b;
  border: 1px solid silver;
  border-radius: 5px;
  margin-left: 30px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const InfoHead = styled.h1`
  font-size: 20px;
  text-align: center;
  color: silver;
  margin-bottom: 5px;
`;

const InfoPara = styled.p`
  color:silver;
  font-size: 15px;
  text-align: center;
`;

export { MainContent };