import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Ladies = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-3">
        <h5>Clothing</h5>
        <ul className="list-unstyled mb-3">
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              T-shirts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Shirts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Pants
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Accessories
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-md-6 col-lg-3">
        <h5>Shoes</h5>
        <ul className="list-unstyled mb-3">
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Trainers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Sandals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Hiking shoes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Casual
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-md-6 col-lg-3">
        <h5>Accessories</h5>
        <ul className="list-unstyled mb-3">
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Trainers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Sandals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Hiking shoes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Casual
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Hiking shoes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Casual
            </NavLink>
          </li>
        </ul>
        <h5>Looks and trends</h5>
        <ul className="list-unstyled mb-3">
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Trainers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Sandals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Hiking shoes
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="banner">
          <Link to="#">
            <img src="/img/banner.jpg" alt="" className="img img-fluid" />
          </Link>
        </div>
        <div className="banner">
          <Link to="#">
            <img src="/img/banner2.jpg" alt="" className="img img-fluid" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ladies;
