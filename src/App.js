import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from'styled-components';

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import { database, auth } from './firebase-config';
import { Login } from './components/Login';
import { NavBar } from './components/NavBar';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [ user ] = useAuthState( auth );

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup( auth, provider );
  };

  const signOutUser = () => {
    signOut( auth );
  };

  if( user ) {
    return (
      <Container>
        <NavBar signOutUser={ signOutUser } user={ user } />
      </Container>
    )
  }

  return (
    <Container>
      <Login signIn={ signIn } />
    </Container>
  );
};

export { App };