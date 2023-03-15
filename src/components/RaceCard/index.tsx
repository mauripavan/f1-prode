import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {useTheme} from 'styled-components';
import {format, differenceInDays} from 'date-fns';

import {icons} from '../../../assets/icons';
import {fontPixel, pixelSizeHorizontal} from '../../constants/metrics';
import {TextHighSpeed} from '../Typography';
import {LockIcon, LockIconWrapper, MainWrapper} from './styles';
import {IRaceCardProps} from './types';

const RaceCard = (props: IRaceCardProps) => {
  const {colors} = useTheme();
  const {raceName, round, date} = props;

  const [isLocked, setIsLocked] = useState(true);

  const formatedDate = format(new Date(date), 'MM/dd');

  const daysToRace = differenceInDays(new Date(date), new Date());

  const checkIfAvailable = () => {
    daysToRace <= 2 ? setIsLocked(false) : setIsLocked(true);
  };

  useEffect(() => {
    checkIfAvailable();
  }, []);

  return (
    <Pressable>
      <MainWrapper>
        <TextHighSpeed
          style={{marginRight: pixelSizeHorizontal(10)}}
          fontSize={fontPixel(8)}
        >
          {round}/23
        </TextHighSpeed>
        <TextHighSpeed color={colors.white} fontSize={fontPixel(8)}>
          {raceName}
        </TextHighSpeed>
        <TextHighSpeed
          color={colors.blue[1]}
          fontSize={fontPixel(8)}
          style={{marginLeft: pixelSizeHorizontal(10)}}
        >
          {formatedDate}
        </TextHighSpeed>
        <LockIconWrapper isLocked={isLocked}>
          <LockIcon source={!isLocked ? icons.unlocked : icons.locked} />
        </LockIconWrapper>
      </MainWrapper>
    </Pressable>
  );
};

export default RaceCard;
