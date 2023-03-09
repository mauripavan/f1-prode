import React from 'react';
import {View} from 'react-native';

import {TextMontserratSB} from '../../components/Typography';

const Home = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TextMontserratSB>Home Screen</TextMontserratSB>
    </View>
  );
};

export default Home;
