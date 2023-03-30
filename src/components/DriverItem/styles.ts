import styled from 'styled-components';
import {Pressable} from 'react-native';

import {heightPixel} from '../../constants/metrics';

export const MainWrapper = styled(Pressable)`
  flex-direction: row;
  height: ${heightPixel(60)}px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.dark[1]};
`;
