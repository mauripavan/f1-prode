import React from 'react';
import {useRecoilState} from 'recoil';
import {useTheme} from 'styled-components';

import {pixelSizeHorizontal} from '../../constants/metrics';
import {driversModalState, positionIndexState} from '../../store/app-state';
import Separator from '../Separator';
import {TextFormula1B, TextFormula1R} from '../Typography';
import {BoxLine, MainSelectDriver, MainWrapper} from './styles';
import {ISelecDriverProps} from './types';

const SelectDriver = (props: ISelecDriverProps) => {
  const {data, index} = props;
  const {colors} = useTheme();
  const [, setModalVisible] = useRecoilState(driversModalState);
  const [, setPositionIndex] = useRecoilState(positionIndexState);

  const handleSelectDriverPress = () => {
    setModalVisible(true);
    setPositionIndex(index);
  };

  return (
    <MainWrapper onPress={handleSelectDriverPress} index={index}>
      <TextFormula1B color={colors.white}>#{data.position}</TextFormula1B>
      <Separator size={5} />
      <BoxLine />
      <Separator size={10} />
      <MainSelectDriver>
        <TextFormula1B
          color={colors.gray[2]}
          style={{paddingHorizontal: pixelSizeHorizontal(18)}}
        >
          Select Driver
        </TextFormula1B>
      </MainSelectDriver>
      {data.name && <data className="team"></data> && (
        <>
          <Separator size={10} />
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
