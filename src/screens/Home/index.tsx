import React, {useEffect, useState} from 'react';
import {StatusBar, FlatList, View} from 'react-native';
import {useTheme} from 'styled-components';
import axios from 'axios';

import RaceCard from '../../components/RaceCard';
import Separator from '../../components/Separator';
import {TextHighSpeed} from '../../components/Typography';
import {FlatListWrapper, MainWrapper} from './styles';

const Home = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const {colors} = useTheme();
  const [races, setRaces] = useState<any>({});

  const baseUrl = 'http://ergast.com/api/f1';

  const getData = async () => {
    const response = await axios.get(`${baseUrl}/current.json`);
    setRaces(response.data.MRData.RaceTable.Races);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <RaceCard round={item.round} raceName={item.raceName} date={item.date} />
    );
  };

  return (
    <MainWrapper>
      <View>
        <TextHighSpeed color={colors.white} fontSize={12}>
          F1 Prode
        </TextHighSpeed>
      </View>
      <FlatListWrapper>
        <FlatList
          data={races}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Separator size={20} />}
          ListFooterComponent={() => <Separator size={50} />}
          ListHeaderComponent={() => <Separator size={30} />}
          showsVerticalScrollIndicator={false}
        />
      </FlatListWrapper>
    </MainWrapper>
  );
};

export default Home;
