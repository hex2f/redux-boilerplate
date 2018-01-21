import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './Home.jsx';
import Editor from './Editor.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
        <Link to="/" style={{ fontWeight: 300, fontSize: '72px', lineHeight: '112px', margin: 0, color: '#000', textDecoration: 'none' }}>
          Redux Numbers
        </Link>
        <Route exact path="/" component={Home}/>
        <Route path="/editor" component={Editor}/>
      </div>
      );
  }
}