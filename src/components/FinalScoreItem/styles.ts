import {View} from 'react-native';
import styled from 'styled-components';

import {heightPixel, pixelSizeHorizontal} from '../../constants/metrics';

interface IMainWrapper {
  index: number;
}

export const MainWrapper = styled(View)<IMainWrapper>`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${pixelSizeHorizontal(20)}px;
  height: ${heightPixel(40)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.gray[2]};
  background-color: ${({theme, index}) =>
    index % 2 === 0 ? theme.colors.dark[2] : theme.colors.dark[3]};
`;
