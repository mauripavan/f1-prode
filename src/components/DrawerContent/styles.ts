import {View, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../constants/metrics';

export const DrawerContentMainWrapepr = styled(View)`
  padding-right: ${pixelSizeHorizontal(20)}px;
  padding-left: ${pixelSizeHorizontal(20)}px;
  flex: 1;
`;

export const LogoWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled(Image)`
  width: ${widthPixel(60)}px;
  height: ${heightPixel(60)}px;
  margin-right: ${pixelSizeHorizontal(20)}px;
`;
export const NavigationWrapper = styled(View)`
  margin-top: ${pixelSizeVertical(44)}px;
  flex: 1;
`;

export const ListItemWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${pixelSizeVertical(37)}px;
`;

export const ListIconWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  width: ${widthPixel(29)}px;
  height: ${heightPixel(29)}px;
  margin-right: ${pixelSizeHorizontal(17)}px;
  border-radius: ${pixelSizeHorizontal(20)}px;
`;
export const ListIcon = styled(Image)`
  width: ${widthPixel(20)}px;
  height: ${heightPixel(20)}px;
  tint-color: ${({theme}) => theme.colors.red[1]};
`;

export const LogOutIcon = styled(Image)`
  height: ${heightPixel(18)}px;
  width: ${widthPixel(18)}px;
  margin-right: ${pixelSizeHorizontal(10)}px;
  tint-color: ${({theme}) => theme.colors.green[2]};
`;

export const LogOutWrapper = styled(TouchableOpacity)`
  padding-horizontal: ${pixelSizeHorizontal(30)}px;
  margin-bottom: ${pixelSizeVertical(10)}px;
  flex-direction: row;
  align-items: center;
`;
