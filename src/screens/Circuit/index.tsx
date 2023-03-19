import React, {useEffect, useState} from 'react';
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
  const {
    abudhabiCircuit,
    australiaCircuit,
    austriaCircuit,
    azerbaijanCircuit,
    belgiumCircuit,
    brazilCircuit,
    britishCircuit,
    canadianCircuit,
    dutchCircuit,
    emiliaCircuit,
    hungaryCircuit,
    italyCircuit,
    japanCircuit,
    lasVegasCircuit,
    mexicoCircuit,
    miamiCircuit,
    monacoCircuit,
    qatarCircuit,
    saudiCircuit,
    singaporeCircuit,
    usCircuit,
    bahrainCircuit,
    spainCircuit,
  } = images;

  const {data} = route.params;

  const onBackPress = () => {
    navigation.goBack();
  };

  const circuits: any = {
    yas_marina: abudhabiCircuit,
    albert_park: australiaCircuit,
    red_bull_ring: austriaCircuit,
    baku: azerbaijanCircuit,
    spa: belgiumCircuit,
    interlagos: brazilCircuit,
    silverstone: britishCircuit,
    villenueve: canadianCircuit,
    zandvoort: dutchCircuit,
    imola: emiliaCircuit,
    hungaroring: hungaryCircuit,
    monza: italyCircuit,
    suzuka: japanCircuit,
    vegas: lasVegasCircuit,
    rodriguez: mexicoCircuit,
    miami: miamiCircuit,
    monaco: monacoCircuit,
    losail: qatarCircuit,
    jeddah: saudiCircuit,
    marina_bay: singaporeCircuit,
    americas: usCircuit,
    bahrain: bahrainCircuit,
    catalunya: spainCircuit,
  };

  const [circuitImage, setCircuitImage] = useState<any>();

  useEffect(() => {
    setCircuitImage(circuits[data.Circuit.circuitId]);
  }, []);

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
        fontSize={fontPixel(22)}
        color={colors.white}
        style={{textAlign: 'center'}}
      >
        {data.raceName}
      </TextFormula1B>
      <TextFormula1B
        fontSize={fontPixel(24)}
        color={colors.red[1]}
        style={{textAlign: 'center'}}
      >
        2023
      </TextFormula1B>
      <Separator size={30} />
      <Image
        source={circuitImage}
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
