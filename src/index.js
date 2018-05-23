import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.js';
import Home from './components/index.js';
import './index.css';

ReactDOM.render(
  <Router>
    <div className="nav-routes">
      <Navbar />
      <Route exact path="/" component={Home} />
    </div>
  </Router>,
  document.getElementById('root')
);
