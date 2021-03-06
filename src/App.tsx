import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './hooks/user';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes />
      </UserProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
