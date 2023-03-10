import styled from 'styled-components';
import {Platform, SafeAreaView, StatusBar} from 'react-native';

export const MainWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;
