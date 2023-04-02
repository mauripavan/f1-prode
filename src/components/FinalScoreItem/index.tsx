import React from 'react';
import {useTheme} from 'styled-components';

import {fontPixel} from '../../constants/metrics';
import {TextFormula1R} from '../Typography';
import {MainWrapper} from './styles';
import {IFinalScoreItemProps} from './types';

const FinalScoreItem = (props: IFinalScoreItemProps) => {
  const {colors} = useTheme();
  const {data, index} = props;

  return (
    <MainWrapper index={index}>
      <TextFormula1R color={colors.white} style={{flex: 1}}>
        {data.position}
      </TextFormula1R>
      <TextFormula1R color={colors.white} style={{flex: 4}}>
        {`${data.name} ${data.lastName}`}
      </TextFormula1R>
      <TextFormula1R color={colors.white} style={{flex: 4}}>
        {data.team}
      </TextFormula1R>
      <TextFormula1R
        color={colors.white}
        fontSize={fontPixel(10)}
        style={{flex: 2}}
      >
        10
      </TextFormula1R>
    </MainWrapper>
  );
};

export default FinalScoreItem;
