import styled from 'styled-components';
import {View} from 'react-native';

import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../constants/metrics';

export const MainWrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SubWrapper = styled(View)`
  height: 50%;
  width: 80%;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.dark[2]};
  border-radius: 10px;
  padding-horizontal: ${pixelSizeHorizontal(20)}px;
  padding-vertical: ${pixelSizeVertical(20)}px;
`;

export const ButtonWrapper = styled(View)`
  justify-content: center;
  align-items: center;
`;
