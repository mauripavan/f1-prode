import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from './routes';

const AuthStack = createStackNavigator();

const AuthController = () => {
  const initialRouteName = routes.Walkthrough.name;

  return (
    <AuthStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}
    >
      {Object.keys(routes).map((key) => {
        const {name, screen, screenNavigationOptions} =
          routes[key as keyof typeof routes];
        return (
          <AuthStack.Screen
            name={name}
            component={screen}
            options={screenNavigationOptions}
            key={name}
          />
        );
      })}
    </AuthStack.Navigator>
  );
};

export default AuthController;
