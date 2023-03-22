import styled from 'styled-components';
import {View} from 'react-native';

import {heightPixel, pixelSizeHorizontal} from '../../constants/metrics';

export const MainWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${pixelSizeHorizontal(20)}px;
  height: ${heightPixel(40)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.gray[2]};
`;
