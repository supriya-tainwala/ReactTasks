import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Favorites from './components/Favorites/Favorites';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/favorites" component={Favorites} />
    </Router>
  );
};

export default App;