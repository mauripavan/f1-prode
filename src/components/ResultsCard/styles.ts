import styled from 'styled-components';
import {Pressable, Image} from 'react-native';

import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../constants/metrics';
import {ICardIconProps} from './types';

export const MainWrapper = styled(Pressable)`
  height: ${heightPixel(100)}px;
  width: 25%;
  background-color: ${({theme, disabled}) =>
    disabled ? theme.colors.red[4] : theme.colors.red[1]};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-horizontal: ${pixelSizeHorizontal(6)}px;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.gray[2]};
`;

export const CardIcon = styled(Image)<ICardIconProps>`
  height: ${heightPixel(15)}px;
  width: ${widthPixel(15)}px;
  tint-color: ${({theme, disabled}) =>
    disabled ? theme.colors.gray[2] : theme.colors.white};
`;
