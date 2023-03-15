import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {useTheme} from 'styled-components';

import DrawerContent from '../../components/DrawerContent';
import ScreensStack from './Screens';

const Drawer = createDrawerNavigator();

const Menu = () => {
  const {colors} = useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        sceneContainerStyle: {backgroundColor: 'transparent'},
        drawerStyle: {
          flex: 1,
          width: '100%',
          borderRightWidth: 0,
          backgroundColor: colors.dark[1],
        },
      }}
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerContent {...props} />
      )}
    >
      <Drawer.Screen
        name="Screens"
        component={ScreensStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Menu;
