import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useTheme} from 'styled-components';

import {icons} from '../../../assets/icons';
import SelectDriver from '../../components/SelectDriver';
import SelectDriverModal from '../../components/SelectDriverModal';
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

const PlayScreen = ({navigation}: any) => {
  const {colors} = useTheme();
  const [drivers, setDrivers] = useState<[]>();

  const renderItem = ({item}: any) => {
    return <SelectDriver data={item} />;
  };

  const getDrivers = async () => {
    const response = await axios.get(
      `http://ergast.com/api/f1/current/1/qualifying.json`,
    );
    console.log(
      'drivers response',
      response?.data.MRData.RaceTable.Races[0].QualifyingResults,
    );
    setDrivers(response?.data.MRData.RaceTable.Races[0].QualifyingResults);
  };

  useEffect(() => {
    getDrivers();
  }, []);

  const hanldeBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <MainWrapper>
        <HeaderWrapper>
          <Pressable onPress={hanldeBackPress}>
            <BackIcon source={icons.back} />
          </Pressable>
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
        <SelectDriverModal driversData={drivers} />
      </MainWrapper>
    </>
  );
};

export default PlayScreen;
