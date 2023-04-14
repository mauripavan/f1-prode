import {View} from 'react-native';
import styled from 'styled-components';

import {pixelSizeHorizontal, pixelSizeVertical} from '../../constants/metrics';

export const MainWrapper = styled(View)`
  background-color: ${({theme}) => theme.colors.black};
  flex: 1;
`;

export const HeaderWrapper = styled(View)`
  background-color: ${({theme}) => theme.colors.black};
  position: absolute;
  top: ${pixelSizeVertical(25)}px;
  left: ${pixelSizeHorizontal(5)}px;
  z-index: 10;
`;

export const ListWrapper = styled(View)`
  flex: 1;
`;
