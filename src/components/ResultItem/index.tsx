import React from 'react';
import {useTheme} from 'styled-components';

import {fontPixel} from '../../constants/metrics';
import {TextFormula1R} from '../Typography';
import {MainWrapper} from './styles';
import {IResultItemProps} from './types';

const ResultItem = (props: IResultItemProps) => {
  const {colors} = useTheme();
  const {data, index} = props;

  return (
    <MainWrapper index={index}>
      <TextFormula1R color={colors.white} style={{flex: 1}}>
        {data.position}
      </TextFormula1R>
      <TextFormula1R color={colors.white} style={{flex: 4}}>
        {`${data.Driver.givenName} ${data.Driver.familyName}`}
      </TextFormula1R>
      <TextFormula1R color={colors.white} style={{flex: 4}}>
        {data.Constructor.name}
      </TextFormula1R>
      <TextFormula1R
        color={colors.white}
        style={{flex: 2}}
        fontSize={fontPixel(10)}
      >
        {data.Q3 || data.Q2 || data.Q1 || data?.Time?.time || '-'}
      </TextFormula1R>
    </MainWrapper>
  );
};

export default ResultItem;
