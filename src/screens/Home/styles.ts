import styled from 'styled-components';
import {View} from 'react-native';

import {pixelSizeHorizontal} from '../../constants/metrics';

export const MainWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
`;

export const FlatListWrapper = styled(View)`
  margin-left: ${pixelSizeHorizontal(10)}px;
  margin-right: ${pixelSizeHorizontal(10)}px;
`;
