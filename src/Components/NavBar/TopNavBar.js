import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MainNavBar from './MainNavBar';
import LoginModal from './LoginModal';

const TopNavBar = () => {
  return (
    <header className="header mb-5">
      <div id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offer mb-3 mb-lg-0">
              <Link to="#" className="btn btn-success btn-sm">
                Offer of the day
              </Link>
              <Link to="#" className="ml-1">
                Get flat 35% off on orders over $50!
              </Link>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <ul className="menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="#" data-toggle="modal" data-target="#login-modal">
                    Login
                  </Link>
                </li>
                <li className="list-inline-item">
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#">Recently viewed</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <LoginModal />
      </div>
      <MainNavBar />
    </header>
  );
};

export default TopNavBar;
