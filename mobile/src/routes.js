import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './components/Header';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      headerLayoutPreset: 'left',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerTitle: <Header />,
        headerStyle: {
          backgroundColor: '#141419',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
