import styled from 'styled-components';
import {Platform, StatusBar, View} from 'react-native';
import LottieView from 'lottie-react-native';

import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../constants/metrics';

export const MainWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const FlatListWrapper = styled(View)`
  margin-left: ${pixelSizeHorizontal(10)}px;
  margin-right: ${pixelSizeHorizontal(10)}px;
`;

export const LoadingWrapper = styled(View)`
  background-color: ${({theme}) => theme.colors.black};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AnimationLoader = styled(LottieView)`
  width: ${widthPixel(166)}px;
  height: ${heightPixel(166)}px;
`;
