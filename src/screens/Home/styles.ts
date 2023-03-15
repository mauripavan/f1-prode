import styled from 'styled-components';
import {Platform, SafeAreaView, StatusBar, View} from 'react-native';

import {pixelSizeHorizontal} from '../../constants/metrics';

export const MainWrapper = styled(SafeAreaView)`
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