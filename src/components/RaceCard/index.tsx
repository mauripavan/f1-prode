import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {format, differenceInDays} from 'date-fns';
import {useNavigation} from '@react-navigation/native';

import {icons} from '../../../assets/icons';
import {fontPixel, pixelSizeHorizontal} from '../../constants/metrics';
import {TextHighSpeed} from '../Typography';
import {LockIcon, LockIconWrapper, MainWrapper, SubWrapper} from './styles';
import {IRaceCardProps} from './types';

const RaceCard = (props: IRaceCardProps) => {
  const {colors} = useTheme();
  const {data} = props;

  const navigation = useNavigation();

  const [isLocked, setIsLocked] = useState(true);

  const date = `${data.date}T${data.time}`;

  const formatedDate = format(new Date(date), 'd MMM');

  const daysToRace = differenceInDays(new Date(date), new Date());

  const checkIfAvailable = () => {
    daysToRace < 1 ? setIsLocked(false) : setIsLocked(true);
  };

  const handleRacePress = () => {
    navigation.navigate('Circuit', {data});
  };

  useEffect(() => {
    checkIfAvailable();
  }, []);

  return (
    <MainWrapper onPress={handleRacePress} disabled={isLocked}>
      <SubWrapper>
        <TextHighSpeed style={{marginRight: pixelSizeHorizontal(10)}}>
          {data.round}/23
        </TextHighSpeed>
        <TextHighSpeed
          color={colors.white}
          style={{overflow: 'hidden', maxWidth: '60%'}}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {data.raceName}
        </TextHighSpeed>
        <TextHighSpeed
          color={colors.blue[1]}
          fontSize={fontPixel(8)}
          style={{marginLeft: pixelSizeHorizontal(10)}}
        >
          {formatedDate}
        </TextHighSpeed>
      </SubWrapper>
      <LockIconWrapper isLocked={isLocked}>
        <LockIcon
          isLocked={isLocked}
          source={!isLocked ? icons.unlocked : icons.locked}
        />
      </LockIconWrapper>
    </MainWrapper>
  );
};

export default RaceCard;
