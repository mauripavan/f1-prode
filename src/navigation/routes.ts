import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {StatusBarStyle} from 'react-native';

import Home from '../screens/Home';
import Walkthrough from '../screens/Walkthrough';
import UserInfo from '../screens/UserInfo';

type RouteKeys = keyof typeof _routes;

const _routes = {
  Walkthrough: {
    name: 'Walkthrough',
    screen: Walkthrough,
  },
  Home: {
    name: 'Home',
    screen: Home,
  },
  UserInfo: {
    name: 'UserInfo',
    screen: UserInfo,
  },
};

export const routes: Record<
  RouteKeys,
  {
    name: string;
    screen: React.ComponentType<any>;
    screenNavigationOptions?: StackNavigationOptions;
    statusBarStyle?: StatusBarStyle;
  }
> = _routes;
