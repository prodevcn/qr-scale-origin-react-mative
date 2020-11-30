import React from 'react';
import {createSwitchNavigator, createDrawerNavigator} from 'react-navigation';

import Init from '../screens/init';
import Login from '../screens/login';
import Logout from '../screens/logout';
import Home from '../screens/home';

import ManageLocationNavigator from './manage-location';
import PickStockNavigator from './pick-stock';
import OrderPickingNavigator from './order-picking';
import BatchPickingNavigator from './batch-picking';
import ReplenishNavigator from './replenish';
import PurchaseNavigator from './purchase';

const stackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#111',
    height: 45
  },
  headerTintColor: '#aaa'
};

export const LocaleKeys = [
  'Home',
  'PickStock',
  'ManageLocation',
  'OrderPicking',
  'BatchPicking',
  'Replenish',
  'Purchase',
  'Logout'
];

const navigationOptions = ({navigation}) => ({
  drawerLabel: navigation.getParam('title', '')
});

export const Routes = createSwitchNavigator(
  {
    Init,
    Login,
    App: createDrawerNavigator(
      {
        Home: {screen: Home, navigationOptions},
        PickStock: {
          screen: PickStockNavigator(stackNavigationOptions),
          navigationOptions
        },
        ManageLocation: {
          screen: ManageLocationNavigator(stackNavigationOptions),
          navigationOptions
        },
        OrderPicking: {
          screen: OrderPickingNavigator(stackNavigationOptions),
          navigationOptions
        },
        BatchPicking: {
          screen: BatchPickingNavigator(stackNavigationOptions),
          navigationOptions
        },
        Replenish: {
          screen: ReplenishNavigator(stackNavigationOptions),
          navigationOptions
        },
        Purchase: {
          screen: PurchaseNavigator(stackNavigationOptions),
          navigationOptions
        },
        Logout: {screen: Logout, navigationOptions}
      },
      {
        initialRouteName: 'Home',
        drawerPosition: 'right',
        drawerWidth: 200,
        drawerLockMode: 'locked-closed',
        drawerBackgroundColor: '#111',
        contentOptions: {
          activeTintColor: '#fff',
          activeBackgroundColor: '#fff1',
          inactiveTintColor: '#fff'
        }
      }
    )
  },
  {initialRouteName: 'Init'}
);
