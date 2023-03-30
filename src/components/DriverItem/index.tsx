import React, {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {useTheme} from 'styled-components';

import {images} from '../../../assets/images';
import {
  driversModalState,
  editionState,
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
  const [, setEdition] = useRecoilState(editionState);
  const [disabled, setDisabled] = useState(false);

  const {
    albonPofile,
    alonsoProfile,
    bottasProfile,
    checoProfile,
    devriesProfile,
    gaslyProfile,
    hamiltonProfile,
    zhouProfile,
    occonProfile,
    sainzProfile,
    norrisProfile,
    russelProfile,
    strollProfile,
    leclercProfile,
    tsunodaProfile,
    piastriProfile,
    sargeantProfile,
    magnussenProfile,
    hulkenbergProfile,
    verstappenProfile,
  } = images;

  const drivers: any = {
    Bottas: bottasProfile,
    Zhou: zhouProfile,
    Tsunoda: tsunodaProfile,
    'de Vries': devriesProfile,
    Ocon: occonProfile,
    Gasly: gaslyProfile,
    Alonso: alonsoProfile,
    Stroll: strollProfile,
    Leclerc: leclercProfile,
    Sainz: sainzProfile,
    Hülkenberg: hulkenbergProfile,
    Magnussen: magnussenProfile,
    Norris: norrisProfile,
    Russell: russelProfile,
    Hamilton: hamiltonProfile,
    Verstappen: verstappenProfile,
    Pérez: checoProfile,
    Albon: albonPofile,
    Sargeant: sargeantProfile,
    Piastri: piastriProfile,
  };

  function replaceItemAtIndex(arr: any, index: any, newValue: any) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  const handleSelection = () => {
    const newList = replaceItemAtIndex(positions, positionIndex, {
      ...positions[positionIndex],
      name: name,
      lastName: lastName,
      team: team,
      image: drivers[lastName],
    });

    setPositions(newList);
    setModalVisible(false);
    setEdition(true);
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
