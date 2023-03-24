import React from 'react';
import {useRecoilState} from 'recoil';
import {useTheme} from 'styled-components';

import {driversModalState} from '../../store/app-state';
import Separator from '../Separator';
import {TextFormula1B, TextFormula1R} from '../Typography';
import {MainSelectDriver, MainWrapper} from './styles';
import {ISelecDriverProps} from './types';

const SelectDriver = (props: ISelecDriverProps) => {
  const {data} = props;
  const {colors} = useTheme();
  const [, setModalVisible] = useRecoilState(driversModalState);

  const handleSelectDriverPress = () => {
    setModalVisible(true);
  };

  return (
    <MainWrapper onPress={handleSelectDriverPress}>
      <TextFormula1B color={colors.white}>{data.position}</TextFormula1B>
      <Separator size={10} />
      <MainSelectDriver>
        <TextFormula1B
          numberOfLines={2}
          color={colors.gray[2]}
          style={{paddingHorizontal: 40}}
        >
          Select Driver
        </TextFormula1B>
      </MainSelectDriver>
      {data.name && data.team && (
        <>
          <Separator size={5} />
          <TextFormula1R color={colors.white}>
            {data.name} {data.lastName}
          </TextFormula1R>
          <TextFormula1R color={colors.white} style={{marginTop: 3}}>
            {data.team}
          </TextFormula1R>
        </>
      )}
    </MainWrapper>
  );
};

export default SelectDriver;
