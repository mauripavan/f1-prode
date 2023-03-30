import React from 'react';
import LottieView from 'lottie-react-native';

import {animations} from '../../../assets/animations';
import {MainWrapper, SubWrapper} from './styles';

const Loading = () => {
  return (
    <MainWrapper>
      <SubWrapper>
        <LottieView
          autoPlay
          duration={3000}
          source={animations.loadingCar}
          resizeMode="contain"
        />
      </SubWrapper>
    </MainWrapper>
  );
};

export default Loading;
