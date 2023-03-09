import {Image, Pressable, View} from 'react-native';
import styled from 'styled-components';

import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../constants/metrics';

const SkipButton = styled(Pressable)`
  position: absolute;
  top: ${pixelSizeVertical(27)}px;
  right: ${pixelSizeHorizontal(20)}px;
  z-index: 10;
`;

const ImageContainer = styled(View)`
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  height: ${heightPixel(100)}px;
  width: ${widthPixel(100)}px;
  resize-mode: contain;
`;

const ButtonContainer = styled(View)`
  margin-left: ${pixelSizeHorizontal(43)}px;
  margin-right: ${pixelSizeHorizontal(42)}px;
`;

export {SkipButton, ImageContainer, StyledImage, ButtonContainer};
