import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';

import {icons} from '../../../assets/icons';
import {images} from '../../../assets/images';
import ResultsCard from '../../components/ResultsCard';
import Separator from '../../components/Separator';
import {
  TextFormula1B,
  TextFormula1R,
  TextHighSpeed,
} from '../../components/Typography';
import {fontPixel} from '../../constants/metrics';
import {
  BackButton,
  BackButtonWrapper,
  CircuitImage,
  HeaderWrapper,
  MainWrapper,
  ResultCardWrapper,
} from './styles';

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

  const [, setQualyResults] = useState([]);
  const [qualyDisabled, setQualyDisabled] = useState(true);
  const [, setRaceResults] = useState([]);
  const [raceDisabled, setRaceDisabled] = useState(true);

  const baseUrl = 'http://ergast.com/api/f1';

  const getQualyResult = async () => {
    const response = await axios.get(
      `${baseUrl}/${data.season}/${data.round}/qualifying.json`,
    );
    setQualyResults(response.data.MRData.RaceTable.Races);
    response?.data?.MRData?.RaceTable?.Races[0] && setQualyDisabled(false);
  };

  const getRaceResult = async () => {
    const response = await axios.get(
      `${baseUrl}/${data.season}/${data.round}/results.json`,
    );
    setRaceResults(response.data.MRData.RaceTable.Races);
    response?.data?.MRData?.RaceTable?.Races[0] && setRaceDisabled(false);
  };

  useEffect(() => {
    getQualyResult();
    getRaceResult();
  }, []);

  const handleQualyPress = () => {
    console.log('ENTRO!');
  };

  const handleRacePress = () => {
    console.log('ENTRO!');
  };

  return (
    <MainWrapper>
      <HeaderWrapper>
        <BackButtonWrapper onPress={onBackPress}>
          <BackButton source={icons.back} />
        </BackButtonWrapper>
        <TextHighSpeed color={colors.white} fontSize={fontPixel(16)}>
          F1 Prode
        </TextHighSpeed>
      </HeaderWrapper>
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
        {data.season}
      </TextFormula1B>
      <Separator size={30} />
      <CircuitImage source={circuitImage} />
      <Separator size={20} />

      <TextFormula1R
        color={colors.white}
        fontSize={18}
        style={{textAlign: 'center'}}
      >
        {data.Circuit.circuitName}
      </TextFormula1R>
      <Separator size={40} />
      <ResultCardWrapper>
        <ResultsCard
          name={'Qualifying Results'}
          icon={icons.tyre}
          onPress={handleQualyPress}
          disabled={qualyDisabled}
        />
        <ResultsCard
          name={'Race Results'}
          icon={icons.raceFlag}
          onPress={handleRacePress}
          disabled={raceDisabled}
        />
      </ResultCardWrapper>
    </MainWrapper>
  );
};

export default Circuit;
