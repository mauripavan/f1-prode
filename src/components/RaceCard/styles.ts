import styled from 'styled-components';
import {View, Image} from 'react-native';

import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../constants/metrics';
import {RaceCardType} from './types';

export const MainWrapper = styled(View)`
  align-items: center;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.gray[2]};
  height: ${heightPixel(35)}px;
  border-radius: 200px;
  width: 100%;
  padding-left: ${pixelSizeHorizontal(15)}px;
`;

export const LockIcon = styled(Image)`
  tint-color: ${({theme}) => theme.colors.black};
  height: ${heightPixel(16)}px;
  width: ${widthPixel(16)}px;
`;

export const LockIconWrapper = styled(View)<RaceCardType>`
  background-color: ${({isLocked, theme}) =>
    isLocked ? theme.colors.red[2] : theme.colors.green[2]};
  height: ${heightPixel(30)}px;
  width: ${widthPixel(30)}px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: ${pixelSizeHorizontal(10)}px;
`;
