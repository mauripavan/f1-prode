import {View} from 'react-native';
import styled from 'styled-components';

import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../constants/metrics';

export const StyledItem = styled(View)<{selected: boolean}>`
  width: ${widthPixel(12)}px;
  height: ${heightPixel(12)}px;
  border-radius: 6px;
  margin-left: ${pixelSizeHorizontal(2)}px;
  margin-right: ${pixelSizeHorizontal(2)}px;
  ${({selected, theme}) =>
    selected
      ? `
            width: ${widthPixel(24)}px;
            background-color: ${theme.colors.red[1]};
        `
      : `backgroundColor: ${theme.colors.gray[3]}}`};
`;
