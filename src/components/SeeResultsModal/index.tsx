import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {useTheme} from 'styled-components';
import BottomSheet from '@gorhom/bottom-sheet';
import {doc, getDoc, setDoc} from 'firebase/firestore/lite';
import {useRecoilValue} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {fontPixel, pixelSizeHorizontal} from '../../constants/metrics';
import FinalScoreItem from '../FinalScoreItem';
import Separator from '../Separator';
import {TextFormula1B, TextFormula1R, TextMontserratSB} from '../Typography';
import {IResultsModalProps} from './types';
import {firebase} from '../../../firebaseConfig';
import {currentUserState} from '../../store/app-state';

const SeeResultsModal = (props: IResultsModalProps) => {
  const {db} = firebase;

  const {colors} = useTheme();
  const {data, raceResults, circuitId} = props;
  const [score, setScore] = useState<any>([]);
  const [totalRaceScore, setTotalRaceScore] = useState(0);
  const currentUser: any = useRecoilValue(currentUserState);

  const renderItem = ({item, index}: any) => {
    return (
      <FinalScoreItem data={item} key={index} index={index} score={score} />
    );
  };

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['10%', '65%'], []);

  useEffect(() => {
    compareArrays(raceResults, data);
  }, []);

  const compareArrays = async (a: any[], b: any[]) => {
    const newResultsArray = a.slice(0, 10);
    const scoreArray = [];
    let totalScore = 0;
    const raceRef = doc(db, 'users', currentUser.email, 'races', circuitId);
    const userRef = doc(db, 'users', currentUser.email);
    const userResult = await getDoc(userRef);
    const filteredUserData = userResult.data();
    const initialValue =
      filteredUserData?.globalScore == undefined
        ? 0
        : filteredUserData?.globalScore;

    if (newResultsArray == undefined) return;
    else {
      for (let i = 0; i < newResultsArray.length; i++) {
        if (newResultsArray[i].Driver.familyName == b[i].lastName) {
          scoreArray.push(...score, true);
          totalScore += 10;
        } else {
          scoreArray.push(...score, false);
        }
      }
      setScore(scoreArray);
      setTotalRaceScore(totalScore);
      setDoc(raceRef, {myScore: totalScore}, {merge: true});
      const updatedScore = initialValue + totalScore;
      const scoreTracked = await AsyncStorage.getItem(`${circuitId}`);

      if (scoreTracked === null) {
        setDoc(userRef, {globalScore: updatedScore}, {merge: true});
        AsyncStorage.setItem(`${circuitId}`, 'true');
      }
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      animateOnMount
      backgroundStyle={{
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: colors.dark[2],
      }}
    >
      <Separator size={10} />
      <View style={{alignItems: 'center'}}>
        <TextFormula1R
          color={colors.white}
          fontSize={fontPixel(14)}
          style={{textAlign: 'center'}}
        >
          Your Score on this round
        </TextFormula1R>
        <Separator size={10} />
        <TextFormula1B color={colors.green[2]} fontSize={fontPixel(16)}>
          {totalRaceScore} pts
        </TextFormula1B>
      </View>
      <Separator size={20} />
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: pixelSizeHorizontal(20),
        }}
      >
        <TextMontserratSB
          color={colors.red[1]}
          fontSize={fontPixel(14)}
          style={{flex: 1}}
        >
          #
        </TextMontserratSB>
        <TextMontserratSB
          color={colors.red[1]}
          fontSize={fontPixel(14)}
          style={{flex: 4}}
        >
          Name
        </TextMontserratSB>
        <TextMontserratSB
          color={colors.red[1]}
          fontSize={fontPixel(14)}
          style={{flex: 4}}
        >
          Team
        </TextMontserratSB>
        <TextMontserratSB
          color={colors.red[1]}
          fontSize={fontPixel(14)}
          style={{flex: 2}}
        >
          Points
        </TextMontserratSB>
      </View>
      <Separator size={10} />
      <View style={{height: Dimensions.get('screen').height}}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </BottomSheet>
  );
};

export default SeeResultsModal;
