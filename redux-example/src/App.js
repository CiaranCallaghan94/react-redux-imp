import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';
import CogLink from './components/CogLink';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CogLink />
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
