import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import {fontPixel, heightPixel} from '../../constants/metrics';
import {ButtonVariants, IButtonProps} from './types';

export const ButtonContainer = styled(TouchableOpacity)<IButtonProps>`
  width: 100%;
  height: ${heightPixel(58)}px;
  border-radius: 68px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 12px 42px rgba(24, 39, 75, 0.12);
  ${({variant, theme}) => {
    switch (variant) {
      case ButtonVariants.Primary:
        return `
          background-color: ${theme.colors.red[1]};
          `;
      case ButtonVariants.Disabled:
        return `
          background-color: ${theme.colors.gray[2]};
          `;
      case ButtonVariants.Secondary:
        return `
          background-color: ${theme.colors.yellow[1]};
          `;
    }
  }};
`;
export const ButtonText = styled(Text)<IButtonProps>`
  ${({variant, fontSize, fontWeight, fontColor, theme}) => {
    switch (variant) {
      case ButtonVariants.Primary:
        return `
          font-size: ${fontSize ? fontPixel(fontSize) : fontPixel(20)}px;
          font-weight: ${fontWeight ? fontWeight : 700};
          color:${fontColor ? fontColor : theme.colors.white};
          font-family: 'MontserratSB'
          `;
      case ButtonVariants.Disabled:
        return `
          font-size: ${fontSize ? fontPixel(fontSize) : fontPixel(20)}px;
          font-weight: ${fontWeight ? fontWeight : 700};
          color: ${fontColor ? fontColor : theme.colors.white};
          font-family: 'MontserratSB'
          `;
      case ButtonVariants.Secondary:
        return `
          font-size: ${fontSize ? fontPixel(fontSize) : fontPixel(20)}px;
          font-weight: ${fontWeight ? fontWeight : 700};
          color: ${fontColor ? fontColor : theme.colors.white};
          font-family: 'MontserratSB'
          `;
    }
  }};
`;
