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

export const PlayButtonWrapper = styled(View)`
  padding-horizontal: ${pixelSizeHorizontal(40)}px;
`;
export const PlayButton = styled(Pressable)`
  height: ${heightPixel(50)}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.yellow[1]};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.gray[0]};
  padding-horizontal: ${pixelSizeHorizontal(40)}px;
`;
