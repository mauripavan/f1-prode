import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {StatusBarStyle} from 'react-native';

import Menu from '../menu/Menu';
import Circuit from '../../screens/Circuit';

type RouteKeys = keyof typeof _routes;

const _routes = {
  Menu: {
    name: 'Menu',
    screen: Menu,
  },
  Circuit: {
    name: 'Circuit',
    screen: Circuit,
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
