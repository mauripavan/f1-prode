import React, {useEffect, useState} from 'react';
import {StatusBar, FlatList} from 'react-native';
import axios from 'axios';

import RaceCard from '../../components/RaceCard';
import Separator from '../../components/Separator';
import {FlatListWrapper, MainWrapper} from './styles';
import Loading from '../../components/Loading';

const Home = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [races, setRaces] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const baseUrl = 'http://ergast.com/api/f1';

  const getData = async () => {
    setLoading(true);
    const response = await axios.get(`${baseUrl}/current.json`);
    setRaces(response.data.MRData.RaceTable.Races);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({item}: any) => {
    return <RaceCard data={item} />;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <MainWrapper>
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
