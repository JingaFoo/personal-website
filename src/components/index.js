import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className="home-page d-flex align-items-center">
      <div className="container d-flex justify-content-center">
        <div className="row">
        <div className="statements d-flex justify-content-center">
          <span>Let&#39;s Build</span><span> Stable</span>
        </div>
          <div className="col-12">
            <div className="dev-title d-flex justify-content-center">
              <div className="dev-title-box">
                <h1>Platforms</h1>
              </div>
            </div>
            <div className="dev-box">
              <div className="dev-profile">
                <div className="dev-profile-icon-box d-flex justify-content-center">
                  <img className="dev-profile-icon" src="./Calvin.png" alt=""/>
                </div>
              </div>
              <div className="dev-name">
                <span>Calvin Mwariama</span>
              </div>
              <div className="relevant-links">
                <ul>
                  <li><a href="https://github.com/JingaFoo"><i className="icon ion-logo-github link-icons"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
