import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux';
import App from './App';
export default class Start extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }
AppRegistry.registerComponent('Medicamp_Mobile', () => Start);
