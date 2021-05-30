import { action, createStore, StoreProvider, useStoreState } from 'easy-peasy';

const store = createStore({
  user: {},
  roomId: '',
  isLoggedIn: false,
  signUserIn: action((state, payload) => {
    state.user = payload;
    state.isLoggedIn = true;
  }),
  SetroomId: action((state, payload) => {
    state.roomId = payload;
  }),
});

export default store;
