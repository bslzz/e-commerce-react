import React from 'react';
import { Link } from 'react-router-dom';

const GridBoxes = () => {
  return (
    <div id="advantages">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="box clickable d-flex flex-column justify-content-center mb-0 h-100">
              <div className="icon">
                <i className="fa fa-heart"></i>
              </div>
              <h3>
                <Link to="#" id="slogan">
                  We love our customers
                </Link>
              </h3>
              <p className="mb-0">
                We are known to provide best possible service ever
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box clickable d-flex flex-column justify-content-center mb-0 h-100">
              <div className="icon">
                <i className="fa fa-tags"></i>
              </div>
              <h3>
                <Link to="#">Best prices</Link>
              </h3>
              <p className="mb-0">
                You can check that the height of the boxes adjust when longer
                text like this one is used in one of them.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box clickable d-flex flex-column justify-content-center mb-0 h-100">
              <div className="icon">
                <i className="fa fa-thumbs-up"></i>
              </div>
              <h3>
                <Link to="#">100% satisfaction guaranteed</Link>
              </h3>
              <p className="mb-0">Free returns on everything for 3 months.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBoxes;
