import React from 'react';
import {useCallback, useRef} from 'react';
import {NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';

import Slide from '../Slide';
import {CarouselItem, ICarouselProps} from './types';
import {windowWidth} from '../../constants/metrics';

const useCarousel = (props: ICarouselProps) => {
  const {list, index, setIndex, navigation} = props;

  const indexRef = useRef(index);
  const flatListRef = useRef<FlatList<CarouselItem>>(null);

  indexRef.current = index;

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);

      const distance = Math.abs(roundIndex - index);

      const isNoMansLand = 0.4 < distance;

      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
      }
    },
    [],
  );

  const flatListOptimizationProps = {
    keyExtractor: useCallback((item: CarouselItem) => String(item.id), []),
    getItemLayout: useCallback(
      (data: unknown, index: number) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      [],
    ),
  };

  const renderItem = useCallback(function renderItem(props: {
    item: CarouselItem;
  }) {
    return <Slide data={props.item} />;
  },
  []);

  const handleButtonPress = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (index < list.length - 1) {
      setIndex(index + 1);
      flatListRef?.current?.scrollToIndex({animated: false, index: index + 1});
    } else {
      navigation.navigate('UserInfo');
    }
  }, [navigation, index, list, setIndex, flatListRef]);

  const onSkipPress = useCallback(() => {
    navigation.navigate('UserInfo');
  }, [navigation]);

  return {
    renderItem,
    handleButtonPress,
    onSkipPress,
    onScroll,
    flatListOptimizationProps,
    flatListRef,
  };
};

export default useCarousel;
