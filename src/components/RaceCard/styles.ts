import styled from 'styled-components';
import {View, Image, Pressable} from 'react-native';

import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../constants/metrics';
import {RaceCardType} from './types';

export const MainWrapper = styled(Pressable)`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.gray[2]};
  height: ${heightPixel(70)}px;
  border-radius: 200px;
  width: 100%;
  padding-horizontal: ${pixelSizeHorizontal(15)}px;
`;

export const SubWrapper = styled(View)`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const LockIcon = styled(Image)<RaceCardType>`
  tint-color: ${({theme, isLocked}) =>
    isLocked ? theme.colors.white : theme.colors.black};
  height: ${heightPixel(16)}px;
  width: ${widthPixel(16)}px;
`;

export const LockIconWrapper = styled(View)<RaceCardType>`
  background-color: ${({isLocked, theme}) =>
    isLocked ? theme.colors.red[3] : theme.colors.green[3]};
  height: ${heightPixel(30)}px;
  width: ${widthPixel(30)}px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({isLocked, theme}) =>
    isLocked ? theme.colors.red[2] : theme.colors.green[2]};
`;
