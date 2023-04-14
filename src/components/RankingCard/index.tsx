import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components';

import {fontPixel} from '../../constants/metrics';
import {TextFormula1B, TextFormula1R} from '../Typography';

export interface IRankingCardProps {
  data: any;
  index: number;
}

const RankingCard = (props: IRankingCardProps) => {
  const {colors} = useTheme();
  const {data, index} = props;

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[2],
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
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
      </View>
      <TextFormula1R
        color={colors.green[2]}
        fontSize={fontPixel(14)}
        style={{textAlign: 'right'}}
      >
        {`${data.user.globalScore || 0} pts`}
      </TextFormula1R>
    </View>
  );
};

export default RankingCard;
