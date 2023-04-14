import {Dimensions, View} from 'react-native';
import styled from 'styled-components';

import {pixelSizeHorizontal} from '../../constants/metrics';

export const HeaderWrapper = styled(View)`
  align-items: center;
`;

export const TableHeaderWrapper = styled(View)`
  flex-direction: row;
  padding-horizontal: ${pixelSizeHorizontal(20)}px;
`;

export const TableItemWrapper = styled(View)`
  height: ${Dimensions.get('screen').height}px;
`;
