import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import PostById from '../containers/PostById';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post/:id" component={PostById} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
