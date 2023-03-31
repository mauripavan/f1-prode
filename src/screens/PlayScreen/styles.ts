import styled from 'styled-components';
import {SafeAreaView, View, Image, Platform, StatusBar} from 'react-native';

import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../constants/metrics';

export const MainWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const HeaderWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${pixelSizeHorizontal(20)}px;
  align-items: center;
  height: ${heightPixel(60)}px;
`;

export const BackIcon = styled(Image)`
  tint-color: ${({theme}) => theme.colors.white};
  height: ${heightPixel(15)}px;
  width: ${widthPixel(15)}px;
`;
