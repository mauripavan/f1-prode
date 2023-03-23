import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useTheme} from 'styled-components';

import {icons} from '../../../assets/icons';
import SelectDriver from '../../components/SelectDriver';
import {TextFormula1R, TextHighSpeed} from '../../components/Typography';
import {BackIcon, HeaderWrapper, MainWrapper} from './styles';

const positions = [
  {
    position: '1st Place',
    name: '',
    lasName: '',
    team: '',
  },
  {
    position: '2nd Place',
    name: '',
    lasName: '',
    team: '',
  },
  {
    position: '3rd Place',
    name: '',
    lasName: '',
    team: '',
  },
  {
    position: '4th Place',
    name: '',
    lasName: '',
    team: '',
  },
  {
    position: '5th Place',
    name: '',
    lasName: '',
    team: '',
  },
  {
    position: '6th Place',
    name: '',
    lasName: '',
    team: '',
  },
  {
    position: '7th Place',
    name: '',
    lasName: '',
    team: '',
  },
  {
    position: '8th Place',
    name: '',
    lasName: '',
    team: '',
  },
  {
    position: '9th Place',
    name: '',
    lasName: '',
    team: '',
  },
  {
    position: '10th Place',
    name: '',
    lasName: '',
    team: '',
  },
];

const PlayScreen = () => {
  const {colors} = useTheme();
  const [, setDrivers] = useState<[]>();

  const renderItem = ({item}: any) => {
    return <SelectDriver data={item} />;
  };

  const getDrivers = async () => {
    const response = await axios.get(
      `http://ergast.com/api/f1/2023/drivers.json`,
    );
    console.log('drivers response', response.data.MRData.DriverTable.Drivers);
    setDrivers(response.data.MRData.DriverTable.Drivers);
  };

  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <MainWrapper>
      <HeaderWrapper>
        <BackIcon source={icons.back} />
        <TextHighSpeed color={colors.white} fontSize={16}>
          F1 Prode
        </TextHighSpeed>
        <Pressable>
          <TextFormula1R color={colors.white} fontSize={12}>
            Save
          </TextFormula1R>
        </Pressable>
      </HeaderWrapper>
      <FlatList data={positions} renderItem={renderItem} numColumns={2} />
    </MainWrapper>
  );
};

export default PlayScreen;
