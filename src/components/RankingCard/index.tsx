import React from 'react';
import {useTheme} from 'styled-components';

import {fontPixel} from '../../constants/metrics';
import {TextFormula1B, TextFormula1R} from '../Typography';
import {MainWrapper, NameAndPlaceWrapper} from './styles';
import {IRankingCardProps} from './types';

const RankingCard = (props: IRankingCardProps) => {
  const {colors} = useTheme();
  const {data, index} = props;

  return (
    <MainWrapper>
      <NameAndPlaceWrapper>
        <TextFormula1B color={colors.white} style={{textAlign: 'center'}}>
          #{index + 1}
        </TextFormula1B>
        <TextFormula1R
          color={colors.white}
          style={{
            marginLeft: 10,
          }}
        >
          {data.user.userData.displayName}
        </TextFormula1R>
      </NameAndPlaceWrapper>
      <TextFormula1R
        color={colors.green[2]}
        fontSize={fontPixel(14)}
        style={{textAlign: 'right'}}
      >
        {`${data.user.globalScore || 0} pts`}
      </TextFormula1R>
    </MainWrapper>
  );
};

export default RankingCard;
