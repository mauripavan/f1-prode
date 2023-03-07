import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {StatusBarStyle} from 'react-native';

import Home from '../screens/Home';

type RouteKeys = keyof typeof _routes;

const _routes = {
  Home: {
    name: 'Home',
    screen: Home,
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
