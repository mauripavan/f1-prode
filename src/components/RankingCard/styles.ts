import {View} from 'react-native';
import styled from 'styled-components';

import {pixelSizeHorizontal} from '../../constants/metrics';

export const MainWrapper = styled(View)`
  align-items: center;
  flex-direction: row;
  padding: ${pixelSizeHorizontal(20)}px;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.gray[2]};
`;

export const NameAndPlaceWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;
