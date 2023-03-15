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

export const LogoWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${pixelSizeVertical(20)}px;
`;

export const LogoImage = styled(Image)`
  width: ${widthPixel(40)}px;
  height: ${heightPixel(40)}px;
  margin-right: ${pixelSizeHorizontal(20)}px;
`;
export const NavigationWrapper = styled(View)`
  margin-top: ${pixelSizeVertical(44)}px;
  flex: 1;
`;

export const ListItemWrapper = styled(View)`
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

export const LogOutWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-bottom: ${pixelSizeVertical(27)}px;
`;

export const LogOutIcon = styled(Image)`
  height: ${heightPixel(15)}px;
  width: ${widthPixel(15)}px;
  margin-right: ${pixelSizeHorizontal(11)}px;
  tint-color: ${({theme}) => theme.colors.green[2]};
`;
