import React from 'react';
import { Link } from 'react-router-dom';

const GetInspired = () => {
  return (
    <div className="container">
      <div className="col-md-12">
        <div className="box slideshow">
          <h3>Get Inspired</h3>
          <p className="lead">
            Get the inspiration from our world className designers
          </p>
          <div id="get-inspired" className="owl-carousel owl-theme">
            <div className="item">
              <Link to="#">
                <img
                  src="img/getinspired1.jpg"
                  alt="Get inspired"
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <img
                  src="img/getinspired2.jpg"
                  alt="Get inspired"
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <img
                  src="img/getinspired3.jpg"
                  alt="Get inspired"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInspired;
