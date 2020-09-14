import React from 'react';
import { NavLink } from 'react-router-dom';

const Men = () => {
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
      </div>
      <div className="col-md-6 col-lg-3">
        <h5>Featured</h5>
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
    </div>
  );
};

export default Men;
