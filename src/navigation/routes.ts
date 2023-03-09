import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {StatusBarStyle} from 'react-native';

import Home from '../screens/Home';
import Walkthrough from '../screens/Walkthrough';

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
