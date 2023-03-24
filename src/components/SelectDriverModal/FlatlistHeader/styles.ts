import styled from 'styled-components';
import {Pressable, Image} from 'react-native';

import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../../constants/metrics';

export const MainWrapper = styled(Pressable)`
  justify-content: center;
  align-items: flex-end;
  margin-right: ${pixelSizeHorizontal(15)}px;
`;

export const CloseIcon = styled(Image)`
  height: ${heightPixel(15)}px;
  width: ${widthPixel(15)}px;
`;
