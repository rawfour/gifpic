import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from 'history.js';
import ImageList from 'views/ImageList';
import Settings from 'views/Settings';
import NotFound from 'views/NotFound';
import ErrorView from 'views/Error';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          exact
          render={() => <Redirect to={`${process.env.PUBLIC_URL}/images`} />}
        />
        <Route path={`${process.env.PUBLIC_URL}/images`} exact component={ImageList} />
        <Route path={`${process.env.PUBLIC_URL}/settings`} exact component={Settings} />
        <Route path={`${process.env.PUBLIC_URL}/notFound`} exact component={NotFound} />
        <Route path={`${process.env.PUBLIC_URL}/error`} exact component={ErrorView} />
        <Route path="*/error" render={() => <Redirect to={`${process.env.PUBLIC_URL}/error`} />} />
        <Route render={() => <Redirect to={`${process.env.PUBLIC_URL}/notFound`} />} />
      </Switch>
    </Router>
  );
}

export default App;
