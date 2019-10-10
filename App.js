import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FriendReducer from './FriendReducer';
import AppNavigator from './AppNavigator';

const store = createStore(FriendReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store } >
        <AppNavigator />
      </Provider>
    );
  }
}