import {TextInput, View} from 'react-native';
import styled from 'styled-components';

import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../constants/metrics';
import {CustomInputType, ICustomTextInputProps} from './types';

export const InputWrapper = styled(View)<ICustomTextInputProps>`
  height: ${heightPixel(35)}px;
  width: 100%;
  justify-content: flex-end;
  padding-horizontal: ${pixelSizeHorizontal(10)}px;
  padding-bottom: ${pixelSizeVertical(5)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme, focused}) =>
    focused ? theme.colors.gray[6] : theme.colors.gray[2]}px;
`;

export const StyledTextInput = styled(TextInput)<CustomInputType>`
  font-family: 'MontserratR';
  font-size: ${({focused}) => (focused ? fontPixel(18) : fontPixel(16))}px;
  color: ${({theme}) => theme.colors.white};
`;

export const ErrorMessageWrapper = styled(View)`
  align-self: baseline;
  padding-left: ${pixelSizeHorizontal(10)}px;
`;
