import styled from 'styled-components';
import {Pressable, View} from 'react-native';

import {heightPixel} from '../../constants/metrics';

export const MainWrapper = styled(Pressable)`
  height: ${heightPixel(235)}px;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const MainSelectDriver = styled(View)`
  height: 60%;
  width: 70%;
  background-color: ${({theme}) => theme.colors.dark[2]};
  border-radius: 200px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.green[2]};
`;
