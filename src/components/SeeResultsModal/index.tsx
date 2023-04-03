import React, {useMemo, useRef} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {useTheme} from 'styled-components';
import BottomSheet from '@gorhom/bottom-sheet';

import {fontPixel, pixelSizeHorizontal} from '../../constants/metrics';
import FinalScoreItem from '../FinalScoreItem';
import Separator from '../Separator';
import {TextFormula1B, TextFormula1R, TextMontserratSB} from '../Typography';
import {IResultsModalProps} from './types';

const SeeResultsModal = (props: IResultsModalProps) => {
  const {colors} = useTheme();
  const {data} = props;

  const renderItem = ({item, index}: any) => {
    return <FinalScoreItem data={item} key={index} index={index} />;
  };

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['10%', '65%'], []);

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
          50 pts
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
