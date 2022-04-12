import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, addDoc, doc, setDoc, getDocs } from 'firebase/firestore';
import styled from'styled-components';

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import { database, auth } from './firebase-config';
import { Login } from './components/Login';
import { NavBar } from './components/NavBar';
import { MainContent } from './components/MainContent';

const App = () => {
  const [ user ] = useAuthState( auth );
  const [ postsArray, setPostsArray ] = useState([]);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup( auth, provider );
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
        comments: [],
        date: new Date(),
        voteCount: 0,
      });
    } catch( error ) {
      console.error( 'error in creating post' );
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
        comments: doc.data().comments,
        title: doc.data().title,
        content: doc.data().content,
        voteCount: doc.data().voteCount,
      };

      newArray.push( obj );
    });

    console.log( newArray );
  };

  if( user ) {
    return (
      <Container>
        <NavBar signOutUser={ signOutUser } user={ user } getPosts={ getPosts } />
        <MainContent user={ user } addPost={ addPost } />
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