import React from 'react';
import { Link } from 'react-router-dom';

const BlogHomePage = () => {
  return (
    <div className="container">
      <div className="col-md-12">
        <div id="blog-homepage" className="row">
          <div className="col-sm-6">
            <div className="post">
              <h4>
                <Link to="/post">Fashion now</Link>
              </h4>
              <p className="author-category">
                By <Link to="#">John Slim</Link> in
                <Link to="">Fashion and style</Link>
              </p>
              <hr />
              <p className="intro">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
              </p>
              <p className="read-more">
                <Link to="/post" className="btn btn-primary">
                  Continue reading
                </Link>
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="post">
              <h4>
                <Link to="/post">Who is who - example blog post</Link>
              </h4>
              <p className="author-category">
                By <Link to="#">John Slim</Link> in
                <Link to="">About Minimal</Link>
              </p>
              <hr />
              <p className="intro">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
              </p>
              <p className="read-more">
                <Link to="/post" className="btn btn-primary">
                  Continue reading
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHomePage;
