import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
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
    <View style={{backgroundColor: colors.black, flex: 1}}>
      <Separator size={30} />
      <View
        style={{
          backgroundColor: colors.black,
          position: 'absolute',
          top: 25,
          left: 5,
          zIndex: 10,
        }}
      >
        <TextFormula1B fontSize={fontPixel(16)} color={colors.red[1]}>
          Ranking{' '}
        </TextFormula1B>
      </View>
      <View
        style={{
          flex: 1,
          borderTopWidth: 8,
          borderRightWidth: 8,
          borderColor: colors.red[1],
          borderRadius: 20,
        }}
      >
        <FlatList data={newUserList} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Ranking;
