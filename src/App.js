import React from 'react'
import { connect } from 'react-redux';

import {LoginButton} from './components/LoginButton'

function App() {
  return (
    <div className="App" style={{paddingTop:250}}>
      <h1>Spotify Music Search</h1>
      <LoginButton/>
    </div>
  );
}

export default connect()(App);
