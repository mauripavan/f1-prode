import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useRecoilState} from 'recoil';
import {useTheme} from 'styled-components';
import {doc, getDoc, setDoc} from 'firebase/firestore/lite';
import Toast from 'react-native-root-toast';

import {icons} from '../../../assets/icons';
import SelectDriver from '../../components/SelectDriver';
import SelectDriverModal from '../../components/SelectDriverModal';
import {TextFormula1R, TextHighSpeed} from '../../components/Typography';
import {positionsState} from '../../store/app-state';
import {BackIcon, HeaderWrapper, MainWrapper} from './styles';
import db from '../../../firebaseConfig';

const PlayScreen = ({navigation, route}: any) => {
  const {colors} = useTheme();
  const [driversData, setDriversData] = useState([]);
  const [positions, setPositions] = useRecoilState(positionsState);
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

  const handleSavePress = async () => {
    const positionsRed = doc(db, 'races', circuitId);
    try {
      await setDoc(positionsRed, {
        positions: positions,
      }).then(() =>
        Toast.show('Positions saved', {
          duration: Toast.durations.SHORT,
          containerStyle: {
            backgroundColor: colors.green[3],
            width: '70%',
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            borderWidth: 1,
            borderColor: colors.gray[2],
          },
          opacity: 1,
          position: 100,
          animation: true,
          hideOnPress: true,
        }),
      );
    } catch (e) {
      Toast.show('Something went worng. Please try again', {
        duration: Toast.durations.SHORT,
        containerStyle: {
          backgroundColor: colors.red[1],
          width: '70%',
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
          borderWidth: 1,
          borderColor: colors.red[1],
        },
        opacity: 1,
        position: 100,
        animation: true,
        hideOnPress: true,
      });
    }
  };

  const getPositionsDB = async () => {
    const positionsRef = doc(db, 'races', circuitId);
    const result = await getDoc(positionsRef);
    const filteredResult = result.data();

    if (filteredResult?.positions !== undefined) {
      setPositions(filteredResult?.positions);
    } else {
      return;
    }
  };

  useEffect(() => {
    getPositionsDB();
  }, []);

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
          <Pressable onPress={handleSavePress}>
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
