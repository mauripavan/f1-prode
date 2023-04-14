import styled from 'styled-components';
import {Pressable, View, Image} from 'react-native';

import {heightPixel, pixelSizeVertical} from '../../constants/metrics';
import {IMainWrapperProps} from './types';

export const MainWrapper = styled(Pressable)<IMainWrapperProps>`
  height: ${heightPixel(235)}px;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-top: ${({index}) => (index % 2 == 1 ? pixelSizeVertical(70) : 0)}px;
  padding: 10px;
`;

export const MainSelectDriver = styled(View)`
  height: 60%;
  width: 70%;
  background-color: ${({theme}) => theme.colors.dark[2]};
  border-radius: 200px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.green[2]};
`;

export const BoxLine = styled(View)`
  height: ${heightPixel(30)}px;
  width: 100%;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-width: 2px;
  border-color: ${({theme}) => theme.colors.white};
`;

export const DriverImage = styled(Image)`
  width: 100%;
  height: 100%;
  margin-top: ${pixelSizeVertical(5)}px;
`;
