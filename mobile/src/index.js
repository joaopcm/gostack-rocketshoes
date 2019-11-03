import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import colors from './styles/colors';

import * as NavigationService from './services/navigation';

import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

export default class App extends Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor={colors.header} />
        <Routes
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </Provider>
    );
  }
}
