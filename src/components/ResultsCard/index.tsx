import React from 'react';
import {useTheme} from 'styled-components';

import Separator from '../Separator';
import {TextFormula1B} from '../Typography';
import {CardIcon, MainWrapper} from './styles';
import {IRaceCardProps} from './types';

const ResultsCard = (props: IRaceCardProps) => {
  const {colors} = useTheme();
  const {icon, name, ...defaultProps} = props;
  return (
    <MainWrapper {...defaultProps}>
      <TextFormula1B color={colors.white} style={{textAlign: 'center'}}>
        {name}
      </TextFormula1B>
      <Separator size={4} />
      <CardIcon source={icon} />
    </MainWrapper>
  );
};

export default ResultsCard;
