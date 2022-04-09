import React, { useState } from 'react';

import { Login } from './components/Login';

const App = () => {
  const [ user, setUser ] = useState( false );

  if( user === false ) {
    return (
      <Login/>
    )
  }

  return (
    <div>
      Hello World
    </div>
  );
};

export { App };