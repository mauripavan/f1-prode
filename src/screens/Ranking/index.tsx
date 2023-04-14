import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useTheme} from 'styled-components';
import {useRecoilValue} from 'recoil';
import {collection, getDocs} from 'firebase/firestore/lite';

import RankingCard from '../../components/RankingCard';
import Separator from '../../components/Separator';
import {TextFormula1B} from '../../components/Typography';
import {fontPixel} from '../../constants/metrics';
import {firebase} from '../../../firebaseConfig';
import {listAllUsersState} from '../../store/app-state';
import Loading from '../../components/Loading';
import {HeaderWrapper, MainWrapper} from './styles';

const Ranking = () => {
  const {colors} = useTheme();
  const {db} = firebase;
  const listAllUsers = useRecoilValue(listAllUsersState);
  const [newUserList, setNewUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getScore();
  }, []);

  function compare(a: any, b: any) {
    if (a.user.globalScore === null || undefined) {
      return -1;
    }
    if (b.user.globalScore === null || undefined) {
      return -1;
    }
    if (a.user.globalScore && b.user.globalScore) {
      return b.user.globalScore - a.user.globalScore;
    }
  }

  const getScore = async () => {
    setLoading(true);
    Promise.all(
      listAllUsers.map(async (user: any) => {
        const racesRef = collection(db, 'users', user.userData.uid, 'races');
        const racesCollection = await getDocs(racesRef);
        const filteredData = racesCollection.docs.map((doc) => doc.data());
        const newObject = {user: user, races: filteredData};
        return newObject;
      }),
    ).then((completeList: any) => {
      const ordererList = completeList.sort(compare);
      setNewUserList(ordererList);
      setLoading(false);
    });
  };

  const renderItem = ({item, index}: any) => {
    return <RankingCard data={item} index={index} />;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <MainWrapper>
      <Separator size={30} />
      <HeaderWrapper>
        <TextFormula1B fontSize={fontPixel(16)} color={colors.red[1]}>
          Ranking{' '}
        </TextFormula1B>
      </HeaderWrapper>
      <Separator size={10} />
      <FlatList data={newUserList} renderItem={renderItem} />
    </MainWrapper>
  );
};

export default Ranking;
