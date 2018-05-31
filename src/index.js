import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/index';
import About from './components/about'
import Contact from './components/contact';
import './index.css';

ReactDOM.render(
  <Router>
    <div className="nav-routes">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>,
  document.getElementById('root')
);
