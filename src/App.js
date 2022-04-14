import React, { useState, useEffect } from 'react';
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
        comments: [],
        date: new Date().toUTCString(),
        voteCount: 0,
      });
    } catch( error ) {
      console.error( 'error in creating post' );
    }
  };

  const addComment = async ( commentContent, data ) => {
    const commentObject = {
      username: user.displayName,
      date: new Date().toUTCString(),
      content: commentContent,
      voteCount: 0,
    };

    try {
      await setDoc( doc( database, 'posts', `${ data.id }` ), {
        email: data.email,
        username: data.username,
        title: data.title,
        content: data.content,
        comments: [ ...data.comments, commentObject ],
        date: data.date,
        voteCount: data.voteCount,
      })
    } catch( error )   {
      console.log( `error in creating comment` )
    }
  };

  const upVote = async ( data ) => {
    try {
      await setDoc( doc( database, 'posts', `${ data.id }` ), {
        email: data.email,
        username: data.username,
        title: data.title,
        content: data.content,
        comments: data.comments,
        date: data.date,
        voteCount: ( data.voteCount + 1 ),
      })
    } catch( error ) {
      console.error( 'error in upvoting post or comment' );
    }
  };

  const downVote = async ( data ) => {
    try {
      await setDoc( doc( database, 'posts', `${ data.id }` ), {
        email: data.email,
        username: data.username,
        title: data.title,
        content: data.content,
        comments: data.comments,
        date: data.date,
        voteCount: ( data.voteCount - 1 ),
      })
    } catch( error ) {
      console.error( 'error in upvoting post or comment' );
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

    setPostsArray( newArray );
  };

  useEffect(() => {
    getPosts();
  });

  if( user ) {
    return (
      <Container>
        <NavBar signOutUser={ signOutUser } user={ user } />
        <MainContent
        user={ user }
        addPost={ addPost }
        getPosts={ getPosts }
        postsArray={ postsArray }
        upVote={ upVote }
        downVote={ downVote }
        addComment={ addComment }
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