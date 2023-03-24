import styled from 'styled-components';
import {View} from 'react-native';

export const MainModalWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SubModalWrapper = styled(View)`
  background-color: ${({theme}) => theme.colors.white};
  height: 60%;
  width: 90%;
  border-radius: 10px;
`;
