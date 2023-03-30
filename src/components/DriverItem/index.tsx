import React, {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {useTheme} from 'styled-components';

import {
  driversModalState,
  positionIndexState,
  positionsState,
} from '../../store/app-state';
import {TextFormula1B, TextFormula1R} from '../Typography';
import {MainWrapper} from './styles';
import {IDriverItemProps} from './types';

const DriverItem = (props: IDriverItemProps) => {
  const {colors} = useTheme();
  const {lastName, name, team} = props;
  const positionIndex = useRecoilValue(positionIndexState);
  const [positions, setPositions] = useRecoilState(positionsState);
  const [, setModalVisible] = useRecoilState(driversModalState);
  const [disabled, setDisabled] = useState(false);

  function replaceItemAtIndex(arr: any, index: any, newValue: any) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  const handleSelection = () => {
    const newList = replaceItemAtIndex(positions, positionIndex, {
      ...positions[positionIndex],
      name: name,
      lastName: lastName,
      team: team,
    });

    setPositions(newList);
    setModalVisible(false);
  };

  const checkIfDisabled = () => {
    const disabled = positions.find((position) => position.name === name);
    disabled !== undefined ? setDisabled(true) : setDisabled(false);
  };

  useEffect(() => {
    checkIfDisabled();
  }, [positions]);

  return (
    <MainWrapper disabled={disabled} onPress={handleSelection}>
      <TextFormula1B
        fontSize={16}
        style={{marginRight: 15}}
        color={disabled ? colors.gray[2] : colors.white}
      >
        {name} {lastName}
      </TextFormula1B>
      <TextFormula1R color={disabled ? colors.gray[2] : colors.white}>
        {team}
      </TextFormula1R>
    </MainWrapper>
  );
};

export default DriverItem;
