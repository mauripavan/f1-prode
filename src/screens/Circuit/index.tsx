import React from 'react';
import {
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  View,
  Pressable,
} from 'react-native';
import {useTheme} from 'styled-components';

import {icons} from '../../../assets/icons';
import {images} from '../../../assets/images';
import Separator from '../../components/Separator';
import {
  TextFormula1B,
  TextFormula1R,
  TextHighSpeed,
} from '../../components/Typography';
import {fontPixel} from '../../constants/metrics';

const Circuit = ({route, navigation}: any) => {
  const {colors} = useTheme();

  const {data} = route.params;

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.black,
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Pressable
          style={{
            position: 'absolute',
            left: 10,
          }}
          onPress={onBackPress}
        >
          <Image
            source={icons.back}
            style={{
              height: 15,
              width: 15,
              tintColor: colors.white,
            }}
          />
        </Pressable>
        <TextHighSpeed color={colors.white} fontSize={fontPixel(16)}>
          F1 Prode
        </TextHighSpeed>
      </View>
      <Separator size={50} />
      <TextFormula1B
        fontSize={fontPixel(30)}
        color={colors.white}
        style={{textAlign: 'center'}}
      >
        {data.raceName}
      </TextFormula1B>
      <TextFormula1B
        fontSize={fontPixel(30)}
        color={colors.red[1]}
        style={{textAlign: 'center'}}
      >
        2023
      </TextFormula1B>
      <Separator size={30} />
      <Image
        source={images.saudiCircuit}
        style={{height: '30%', width: '100%', resizeMode: 'contain'}}
      />
      <Separator size={20} />

      <TextFormula1R
        color={colors.white}
        fontSize={18}
        style={{textAlign: 'center'}}
      >
        {data.Circuit.circuitName}
      </TextFormula1R>
    </SafeAreaView>
  );
};

export default Circuit;
