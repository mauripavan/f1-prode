import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {useDrawerStatus} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Home';
import useScreenOptions from '../../hooks/useScreenOptions';
import Circuit from '../../screens/Circuit';

const Stack = createStackNavigator();

const Screens = () => {
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator
      screenOptions={screenOptions.stack}
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Circuit"
        component={Circuit}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

const ScreensStack = () => {
  const isDrawerOpen = useDrawerStatus();
  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.99],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {
    borderRadius: borderRadius,
    transform: [{scale: scale}],
  };

  useEffect(() => {
    Animated.timing(animation, {
      duration: 200,
      useNativeDriver: true,
      toValue: isDrawerOpen === 'open' ? 0 : 0,
    }).start();
  }, [isDrawerOpen, animation]);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        animatedStyle,
        {
          flex: 1,
          overflow: 'hidden',
        },
      ])}
    >
      <Screens />
    </Animated.View>
  );
};

export default ScreensStack;
