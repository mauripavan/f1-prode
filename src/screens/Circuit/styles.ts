import styled from 'styled-components';
import {
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  View,
  Image,
} from 'react-native';

import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../constants/metrics';

export const MainWrapper = styled(SafeAreaView)`
  background-color: ${({theme}) => theme.colors.black};
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0};
`;

export const HeaderWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButtonWrapper = styled(Pressable)`
  position: absolute;
  left: ${pixelSizeHorizontal(10)}px;
`;
export const BackButton = styled(Image)`
  height: ${heightPixel(15)}px;
  width: ${widthPixel(15)}px;
  tint-color: ${({theme}) => theme.colors.white};
`;

export const CircuitImage = styled(Image)`
  height: 30%;
  width: 100%;
  resize-mode: contain;
`;

export const ResultCardWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
`;
