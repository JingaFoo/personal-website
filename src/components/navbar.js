import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="container nav-content">
            <div className="row no-gutters">
            <div className="col-3">
              <NavLink to="/">
                <button className="nav-button" data-toggle="collapse" data-target="#navbarNav">
                  <div>
                    <i className="ion-md-home nav-icons"></i>
                    <h5 className="nav-title">Home</h5>
                  </div>
                </button>
              </NavLink>
            </div>
              <div className="col-3">
                <NavLink to="/about">
                  <button className="nav-button" data-toggle="collapse" data-target="#navbarNav">
                    <div>
                      <i className="ion-md-person nav-icons"></i>
                      <h5 className="nav-title">About</h5>
                    </div>
                  </button>
                </NavLink>
              </div>
              <div className="col-3">
                <NavLink to="/resume">
                  <button className="nav-button" data-toggle="collapse" data-target="#navbarNav">
                    <div>
                      <i className="ion-md-paper nav-icons"></i>
                      <h5 className="nav-title">Resume</h5>
                    </div>
                  </button>
                </NavLink>
              </div>
              <div className="col-3">
                <NavLink to="/contact">
                  <button className="nav-button" data-toggle="collapse" data-target="#navbarNav">
                    <div>
                      <i className="ion-md-mail nav-icons"></i>
                      <h5 className="nav-title">Contact</h5>
                    </div>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
        <div className="container drop-down-content">
          <button className="drop-button" data-toggle="collapse" data-target="#navbarNav">
            <div>
            <i className="ion-md-menu drop-down">More stuff!</i>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
