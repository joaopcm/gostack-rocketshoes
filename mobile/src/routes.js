import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './components/Header';

import Main from './pages/Main';
import Cart from './pages/Cart';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      headerLayoutPreset: 'left',
      headerBackTitleVisible: false,
      cardStyle: {
        backgroundColor: `${colors.dark}`,
      },
      defaultNavigationOptions: navigation => ({
        headerTitle: <Header {...navigation} />,
        headerStyle: {
          backgroundColor: `${colors.header}`,
        },
        headerTintColor: '#fff',
      }),
    }
  )
);

export default Routes;
