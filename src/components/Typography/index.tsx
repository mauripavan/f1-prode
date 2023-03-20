import {Text, TextProps} from 'react-native';
import styled from 'styled-components';

import {fontPixel} from '../../constants/metrics';

interface ITypographyProps extends TextProps {
  color?: string;
  fontSize?: number;
}

// HighSpeed
const TextHighSpeed = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(12)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: 'HighSpeed';
`;

// MontserratEL
const TextMontserratEL = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(12)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: 'MontserratEL';
`;

// MontserratL
const TextMontserratL = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(12)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: 'MontserratL';
`;

// MontserratR
const TextMontserratR = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(12)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: 'MontserratR';
`;

// MontserratSB
const TextMontserratSB = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(12)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: 'MontserratSB';
`;

// Formula1R
const TextFormula1R = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(12)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: 'Formula1R';
`;

// Formula1B
const TextFormula1B = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(12)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: 'Formula1B';
`;

export {
  TextHighSpeed,
  TextMontserratEL,
  TextMontserratL,
  TextMontserratR,
  TextMontserratSB,
  TextFormula1R,
  TextFormula1B,
};
