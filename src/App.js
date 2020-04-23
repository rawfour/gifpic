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

const StyledBackgroundWrap = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-size: 100%;
  background-image: url(${({ theme }) => theme.bgImage});
`;

const StyledMainwrapper = styled.div`
  max-width: 1500px;
  margin: 40px auto;
  padding: 15px;
  position: relative;
`;

function App() {
  return (
    <MainTemplate>
      <StyledBackgroundWrap />
      <Router history={history}>
        <Header />
        <Suspense fallback={<Loader />}>
          <StyledMainwrapper>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/images" />} />
              <Route path="/images" exact component={ImageList} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/notFound" exact component={NotFound} />
              <Route path="/error" exact component={ErrorView} />
              <Route path="*/error" render={() => <Redirect to="/error" />} />
              <Route render={() => <Redirect to="/notFound" />} />
            </Switch>
          </StyledMainwrapper>
        </Suspense>
      </Router>
      <GlobalStyle />
    </MainTemplate>
  );
}

export default App;
