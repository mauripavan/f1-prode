import React from 'react';
import {useTheme} from 'styled-components';

import Separator from '../Separator';
import {TextFormula1B} from '../Typography';
import {CardIcon, MainWrapper} from './styles';
import {IRaceCardProps} from './types';

const ResultsCard = (props: IRaceCardProps) => {
  const {colors} = useTheme();
  const {icon, name, disabled, ...defaultProps} = props;
  return (
    <MainWrapper {...defaultProps} disabled={disabled}>
      <TextFormula1B
        color={disabled ? colors.gray[2] : colors.white}
        style={{textAlign: 'center'}}
      >
        {name}
      </TextFormula1B>
      <Separator size={4} />
      <CardIcon disabled={disabled} source={icon} />
    </MainWrapper>
  );
};

export default ResultsCard;
