import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';
import {DrawerActions} from '@react-navigation/native';
import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';
import {useTheme} from 'styled-components';

import {icons} from '../../assets/icons';
import {TextHighSpeed} from '../components/Typography';

export default () => {
  const {colors} = useTheme();
  //TODO: Type navigation
  const navigation = useNavigation<any>();

  const menu = {
    headerStyle: {
      elevation: 0,
      backgroundColor: colors.red[1],
      shadowOpacity: 0,
      height: 110,
    },
    headerTitleAlign: 'center',
    headerTitleContainerStyle: {marginLeft: -10},
    headerLeftContainerStyle: {paddingLeft: 20},
    headerRightContainerStyle: {paddingRight: 10},
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerTitle: () => (
      <TextHighSpeed color={colors.white} fontSize={18}>
        F1 Prode
      </TextHighSpeed>
    ),
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Image
          source={icons.menu}
          style={{width: 20, height: 20, borderRadius: 0}}
        />
      </TouchableOpacity>
    ),
    headerRight: () => null,
  } as StackHeaderOptions;

  const options: {[k: string]: any} = {
    stack: menu,
  };

  return options;
};
