import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';
import Header from './components/Header';
import MainTemplate from './templates/MainTemplate';
import GlobalStyle from './theme/GlobalStyle';
import Loader from './components/Loader';

const ImageList = React.lazy(() => import('./views/ImageList'));
const Settings = React.lazy(() => import('./views/Settings'));
const NotFound = React.lazy(() => import('./views/ImageList'));
const ErrorView = React.lazy(() => import('./views/Settings'));

const StyledMainwrapper = styled.div`
  max-width: 1500px;
  margin: 40px auto;
  padding: 15px;
  position: relative;
`;

function App() {
  return (
    <MainTemplate>
      <GlobalStyle />
      <Router history={history}>
        <Header />

        <StyledMainwrapper>
          <Suspense fallback={<Loader />}>
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
              <Route
                path="*/error"
                render={() => <Redirect to={`${process.env.PUBLIC_URL}/error`} />}
              />
              <Route render={() => <Redirect to={`${process.env.PUBLIC_URL}/notFound`} />} />
            </Switch>
          </Suspense>
        </StyledMainwrapper>
      </Router>
    </MainTemplate>
  );
}

export default App;
