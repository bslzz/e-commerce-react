import React from 'react';
import Carousel from './Homepage/Carousel';
import GridBoxes from './Homepage/GridBoxes';
import HotThisWeek from './Homepage/HotThisWeek';
import GetInspired from './Homepage/GetInspired';
import FromOurBlog from './Homepage/FromOurBlog';
import BlogHomePage from './Homepage/BlogHomePage';

const Home = () => {
  return (
    <div id="all">
      <div id="content">
        <Carousel />
        <GridBoxes />
        <HotThisWeek />
        <GetInspired />
        <FromOurBlog />
        <BlogHomePage />
      </div>
    </div>
  );
};

export default Home;
