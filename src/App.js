import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavBar from './Components/NavBar/TopNavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';

const App = () => {
  return (
    <Router>
      <TopNavBar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
      <Copyright />
    </Router>
  );
};

export default App;
