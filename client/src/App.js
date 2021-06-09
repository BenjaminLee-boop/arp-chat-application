import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useStoreState, useStoreActions, useStore } from 'easy-peasy';
import { useFeathers } from 'figbird';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Chat from './components/Chat';

function App() {
  const isLogged = useStoreState(state => state.isLoggedIn);
  const updateUserState = useStoreActions(actions => actions.signUserIn);
  const feathers = useFeathers();

  useEffect(() => {
    feathers
      .reAuthenticate()
      .then(user => {
        updateUserState(user);
      })
      .catch(error => {
        console.log(error);
      });
  }, [feathers, updateUserState]);

  if (isLogged) {
    return (
      <div className="app">
        <Router>
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        </Router>
      </div>
    );
  }
  return <Login />;
}

export default App;
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
