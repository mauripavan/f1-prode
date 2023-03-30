import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useRecoilState} from 'recoil';
import {useTheme} from 'styled-components';

import {icons} from '../../../assets/icons';
import SelectDriver from '../../components/SelectDriver';
import SelectDriverModal from '../../components/SelectDriverModal';
import {TextFormula1R, TextHighSpeed} from '../../components/Typography';
import {positionsState} from '../../store/app-state';
import {BackIcon, HeaderWrapper, MainWrapper} from './styles';

const PlayScreen = ({navigation, route}: any) => {
  const {colors} = useTheme();
  const [driversData, setDriversData] = useState([]);
  const [positions] = useRecoilState(positionsState);
  const {circuitId} = route.params;

  useEffect(() => {
    getDrivers();
  }, []);

  useEffect(() => {
    driversData.sort(compare);
  }, [driversData]);

  function compare(a: any, b: any) {
    if (a.Constructor.name < b.Constructor.name) {
      return -1;
    }
    if (a.Constructor.name > b.Constructor.name) {
      return 1;
    }
    return 0;
  }

  const renderItem = ({item, index}: any) => {
    return <SelectDriver data={item} index={index} />;
  };

  const getDrivers = async () => {
    const response = await axios.get(
      `http://ergast.com/api/f1/current/1/qualifying.json`,
    );
    setDriversData(response?.data.MRData.RaceTable.Races[0].QualifyingResults);
  };

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
        <SelectDriverModal driversData={driversData} circuitId={circuitId} />
      </MainWrapper>
    </>
  );
};

export default PlayScreen;
