import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from './routes';

const HomeStack = createStackNavigator();

const HomeController = () => {
  const initialRouteName = routes.Menu.name;

  return (
    <HomeStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}
    >
      {Object.keys(routes).map((key) => {
        const {name, screen, screenNavigationOptions} =
          routes[key as keyof typeof routes];
        return (
          <HomeStack.Screen
            name={name}
            component={screen}
            options={screenNavigationOptions}
            key={name}
          />
        );
      })}
    </HomeStack.Navigator>
  );
};

export default HomeController;
