import React from 'react';
import styled from 'styled-components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from 'history.js';
import ImageList from 'views/ImageList';
import Settings from 'views/Settings';
import NotFound from 'views/NotFound';
import ErrorView from 'views/Error';
import Header from 'components/Header';
import MainTemplate from 'templates/MainTemplate';
import GlobalStyle from 'theme/GlobalStyle';

const StyledMainwrapper = styled.div`
  max-width: 1500px;
  margin: 40px auto;
  padding: 15px;
`;

function App() {
  return (
    <MainTemplate>
      <GlobalStyle />
      <Router history={history}>
        <Header />
        <StyledMainwrapper>
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
        </StyledMainwrapper>
      </Router>
    </MainTemplate>
  );
}

export default App;
