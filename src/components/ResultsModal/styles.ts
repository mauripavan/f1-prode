import styled from 'styled-components';
import {
  Pressable,
  View,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../constants/metrics';

export const MainModalWrapper = styled(View)`
  flex: 1;
  justify-content: center;
`;
export const SubModalWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const HeaderWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CloseButtonWrapper = styled(Pressable)`
  position: absolute;
  left: ${pixelSizeHorizontal(15)}px;
`;
export const CloseButton = styled(Image)`
  height: ${heightPixel(13)}px;
  width: ${widthPixel(13)}px;
  tint-color: ${({theme}) => theme.colors.white};
`;

export const LogoHeader = styled(Image)`
  width: ${widthPixel(60)}px;
  height: ${heightPixel(60)}px;
`;

export const TableHeader = styled(View)`
  flex-direction: row;
  padding-horizontal: ${pixelSizeHorizontal(20)}px;
`;
