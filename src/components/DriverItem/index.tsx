import React from 'react';

import {TextFormula1B, TextFormula1R} from '../Typography';
import {MainWrapper} from './styles';
import {IDriverItemProps} from './types';

const DriverItem = (props: IDriverItemProps) => {
  const {lastName, name, team} = props;

  return (
    <MainWrapper>
      <TextFormula1B fontSize={16} style={{marginRight: 15}}>
        {name} {lastName}
      </TextFormula1B>
      <TextFormula1R>{team}</TextFormula1R>
    </MainWrapper>
  );
};

export default DriverItem;
