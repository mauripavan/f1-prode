import React from 'react';
import {Platform, StatusBar, SafeAreaView} from 'react-native';
import {useTheme} from 'styled-components';

import {TextHighSpeed} from '../../components/Typography';

const Circuit = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.black,
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <TextHighSpeed color={colors.white}>F1 Prode</TextHighSpeed>
    </SafeAreaView>
  );
};

export default Circuit;
