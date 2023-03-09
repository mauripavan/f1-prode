import {View} from 'react-native';
import styled from 'styled-components';

import {
  pixelSizeHorizontal,
  pixelSizeVertical,
  windowWidth,
} from '../../constants/metrics';
import {TextMontserratR, TextMontserratSB} from '../Typography';

const SlideContainer = styled(View)`
  padding: 0px ${pixelSizeHorizontal(42)}px;
  width: ${windowWidth}px;
`;

const TitleText = styled(TextMontserratSB)`
  margin-bottom: ${pixelSizeVertical(16)}px;
  text-align: center;
`;

const DescriptionText = styled(TextMontserratR)`
  text-align: center;
`;

export {SlideContainer, TitleText, DescriptionText};
