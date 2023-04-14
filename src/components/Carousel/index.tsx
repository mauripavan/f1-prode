import React from 'react';
import {FlatList, View} from 'react-native';
import {useTheme} from 'styled-components';

import Pagination from '../Pagination';
import {ICarouselProps} from './types';
import useCarousel from './useCarousel';
import {
  ButtonContainer,
  ImageContainer,
  SkipButton,
  StyledImage,
} from './style';
import Separator from '../Separator';
import {fontPixel} from '../../constants/metrics';
import {TextHighSpeed, TextMontserratR} from '../Typography';
import {images} from '../../../assets/images';
import CustomButton from '../CustomButton';

function Carousel(props: ICarouselProps) {
  const {list, index} = props;
  const {colors} = useTheme();
  const {
    flatListOptimizationProps,
    handleButtonPress,
    onScroll,
    onSkipPress,
    renderItem,
    flatListRef,
  } = useCarousel(props);

  return (
    <View>
      <SkipButton onPress={onSkipPress}>
        <TextMontserratR fontSize={fontPixel(13)} color={colors.white}>
          Skip
        </TextMontserratR>
      </SkipButton>
      <Separator size={130} />
      <ImageContainer>
        <StyledImage source={images.f1Logo} />
      </ImageContainer>
      <TextHighSpeed
        color={colors.white}
        fontSize={fontPixel(30)}
        style={{textAlign: 'center'}}
      >
        F1 Prode
      </TextHighSpeed>
      <FlatList
        ref={flatListRef}
        data={list}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Separator size={20} />
      <Pagination list={list} index={index} />
      <Separator size={28} />

      <ButtonContainer>
        <CustomButton
          onPress={handleButtonPress}
          text={index < list.length - 1 ? 'Next' : 'Start'}
          fontColor={colors.white}
        />
      </ButtonContainer>
    </View>
  );
}

export default React.memo(Carousel);
