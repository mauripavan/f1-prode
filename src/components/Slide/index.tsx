import React from 'react';
import {useTheme} from 'styled-components';

import {fontPixel} from '../../constants/metrics';
import {DescriptionText, SlideContainer, TitleText} from './styles';
import {ISlideProps} from './types';

const Slide = (props: ISlideProps) => {
  const {
    data: {title, description},
  } = props;
  const {colors} = useTheme();

  return (
    <SlideContainer>
      <TitleText fontSize={fontPixel(28)} color={colors.white}>
        {title}
      </TitleText>
      <DescriptionText fontSize={fontPixel(17)} color={colors.gray[0]}>
        {description}
      </DescriptionText>
    </SlideContainer>
  );
};

export default React.memo(Slide);
