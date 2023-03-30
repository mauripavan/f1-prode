import {View} from 'react-native';
import styled from 'styled-components';

export const MainWrapper = styled(View)`
  background-color: ${({theme}) => theme.colors.black};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SubWrapper = styled(View)`
  width: 30%;
  height: 15%;
  justify-content: center;
  align-content: center;
  background-color: ${({theme}) => theme.colors.dark[2]};
  border-radius: 200px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.gray[2]};
`;
