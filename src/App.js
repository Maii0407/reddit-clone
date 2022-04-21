import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import styled from'styled-components';

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import { database, auth } from './firebase-config';
import { Login } from './components/Login';
import { NavBar } from './components/NavBar';
import { MainContent } from './components/MainContent';

const App = () => {
  const [ user ] = useAuthState( auth );
  const [ postsArray, setPostsArray ] = useState([]);
  const [ commentsArray, setCommentsArray ] = useState([]);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup( auth, provider );
    getPosts();
  };

  const signOutUser = () => {
    signOut( auth );
  };

  const addPost = async ( contentTitle, mainContent ) => {
    try {
      await addDoc( collection( database, 'posts' ), {
        email: user.email,
        username: user.displayName,
        title: contentTitle,
        content: mainContent,
        date: new Date().toUTCString(),
        voteCount: 0,
      });
    } catch( error ) {
      console.error( 'error in creating post' );
    }
  };

  const addComment = async ( commentContent, data ) => {
    try {
      await addDoc( collection( database, 'comments' ), {
        username: user.displayName,
        date: new Date().toUTCString(),
        content: commentContent,
        voteCount: 0,
        postID: data.id
      })
    } catch( error ) {
      console.error( 'error in adding comment' );
    }
  };

  const getPosts = async () => {
    const newArray = [];

    const querySnapshot = await getDocs( collection( database, 'posts'));
    querySnapshot.forEach(( doc ) => {
      const obj = {
        email: doc.data().email,
        username: doc.data().username,
        date: doc.data().date,
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
        voteCount: doc.data().voteCount,
      };

      newArray.push( obj );
    });

    setPostsArray( newArray );
  };

  const getComments = async () => {
    const newArray = [];

    const querySnapshot = await getDocs( collection( database, 'comments' ));
    querySnapshot.forEach(( data ) => {
      const obj = {
        username: data.data().username,
        date: data.data().date,
        content: data.data().content,
        voteCount: data.data().voteCount,
        postID: data.data().postID,
        id: data.id,
      }

      newArray.push( obj );
    });

    setCommentsArray( newArray );
  };

  useEffect(() => {
    if( postsArray.length === 0 && commentsArray.length === 0  ) {
      getPosts();
      getComments();
    }
  }, [  postsArray, commentsArray]);

  if( user ) {
    return (
      <Container>
        <NavBar signOutUser={ signOutUser } user={ user } />
        <MainContent
        user={ user }
        addPost={ addPost }
        getPosts={ getPosts }
        getComments={ getComments }
        postsArray={ postsArray }
        addComment={ addComment }
        commentsArray={ commentsArray }
        />
      </Container>
    )
  }

  return (
    <Container>
      <Login signIn={ signIn } />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export { App };