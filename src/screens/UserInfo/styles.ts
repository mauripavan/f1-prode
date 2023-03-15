import {Platform, SafeAreaView, StatusBar, View} from 'react-native';
import styled from 'styled-components';

import {pixelSizeHorizontal} from '../../constants/metrics';

export const MainWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const InputWrapper = styled(View)`
  margin-left: ${pixelSizeHorizontal(20)}px;
  margin-right: ${pixelSizeHorizontal(20)}px;
`;

export const ButtonWrapper = styled(View)`
  margin-left: ${pixelSizeHorizontal(52)}px;
  margin-right: ${pixelSizeHorizontal(52)}px;
`;
