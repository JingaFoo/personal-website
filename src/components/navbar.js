import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container drop-down-content justify-content-center">
          <button className="drop-button" data-toggle="collapse" data-target="#navbarNav">
            <div>
              <i className="ion-md-menu drop-down">More stuff!</i>
            </div>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="container nav-content d-none d-sm-block">
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
                      <h5 className="nav-title">Who am i?</h5>
                    </div>
                  </button>
                </NavLink>
              </div>
              <div className="col-3">
                <NavLink to="/resume">
                  <button className="nav-button" data-toggle="collapse" data-target="#navbarNav">
                    <div>
                      <i className="ion-md-paper nav-icons"></i>
                      <h5 className="nav-title">My Resume</h5>
                    </div>
                  </button>
                </NavLink>
              </div>
              <div className="col-3">
                <NavLink to="/contact">
                  <button className="nav-button" data-toggle="collapse" data-target="#navbarNav">
                    <div>
                      <i className="ion-md-mail nav-icons"></i>
                      <h5 className="nav-title">Contact Me</h5>
                    </div>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="container nav-content d-block d-sm-none">
            <NavLink to="/">
              <button className="nav-button" data-toggle="collapse" data-target="#navbarNav">
                <div>
                  <i className="ion-md-home nav-icons"></i>
                  <h5 className="nav-title">Home</h5>
                </div>
              </button>
            </NavLink>
            <NavLink to="/about">
              <button className="nav-button" data-toggle="collapse" data-target="#navbarNav">
                <div>
                  <i className="ion-md-person nav-icons"></i>
                  <h5 className="nav-title">Who am i?</h5>
                </div>
              </button>
            </NavLink>
            <NavLink to="/resume">
              <button className="nav-button" data-toggle="collapse" data-target="#navbarNav">
                <div>
                  <i className="ion-md-paper nav-icons"></i>
                  <h5 className="nav-title">My Resume</h5>
                </div>
              </button>
            </NavLink>
            <NavLink to="/contact">
              <button className="nav-button" data-toggle="collapse" data-target="#navbarNav">
                <div>
                  <i className="ion-md-mail nav-icons"></i>
                  <h5 className="nav-title">Contact Me</h5>
                </div>
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
