import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import colors from './styles/colors';

import * as NavigationService from './services/navigation';

import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

export default function App() {
  const [navigator, setNavigator] = useState(null);

  useEffect(() => {
    NavigationService.setNavigator(navigator);
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.header} />
      <Routes ref={nav => setNavigator(nav)} />
    </Provider>
  );
}
