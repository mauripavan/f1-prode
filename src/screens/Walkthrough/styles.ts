import styled from 'styled-components';
import {
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {heightPixel} from '../../constants/metrics';

const buttonWidth = Dimensions.get('window').width - 150;

export const MainWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const StartButton = styled(Pressable)`
  background-color: ${({theme}) => theme.colors.red[1]};
  height: ${heightPixel(55)}px;
  width: ${buttonWidth}px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
