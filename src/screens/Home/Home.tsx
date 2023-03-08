import React from 'react';

import {
  TextHighSpeed,
  TextMontserratEL,
  TextMontserratL,
  TextMontserratR,
  TextMontserratSB,
} from '../../components/Typography';
import {MainWrapper} from './styles';

const Home = () => {
  return (
    <MainWrapper>
      <TextHighSpeed>Home Screen</TextHighSpeed>
      <TextMontserratEL>Home Screen</TextMontserratEL>
      <TextMontserratL>Home Screen</TextMontserratL>
      <TextMontserratR>Home Screen</TextMontserratR>
      <TextMontserratSB>Home Screen</TextMontserratSB>
    </MainWrapper>
  );
};

export default Home;
