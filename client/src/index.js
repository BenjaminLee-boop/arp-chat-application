import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import { Provider, useFind } from 'figbird';
import { StoreProvider } from 'easy-peasy';
import store from './store/store';
import App from './App';

const socket = io('http://localhost:3030');
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(
  feathers.authentication({
    storage: window.localStorage,
  }),
);

ReactDOM.render(
  <StoreProvider store={store}>
    <React.StrictMode>
      <Provider feathers={client}>
        <App />
      </Provider>
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById('root'),
);
