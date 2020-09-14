import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavBar from './Components/TopNavBar';
import Home from './Components/Home';

const App = () => {
  return (
    <Router>
      <TopNavBar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
