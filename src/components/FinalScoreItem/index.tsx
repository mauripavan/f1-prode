import React from 'react';
import {useTheme} from 'styled-components';

import {fontPixel} from '../../constants/metrics';
import {TextFormula1R} from '../Typography';
import {MainWrapper} from './styles';
import {IFinalScoreItemProps} from './types';

const FinalScoreItem = (props: IFinalScoreItemProps) => {
  const {colors} = useTheme();
  const {data, index, score} = props;

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
        color={score[index] ? colors.green[2] : colors.red[1]}
        fontSize={fontPixel(10)}
        style={{flex: 2, textAlign: 'center'}}
      >
        {score[index] ? 10 : 0}
      </TextFormula1R>
    </MainWrapper>
  );
};

export default FinalScoreItem;
