import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {useRecoilState} from 'recoil';

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
  PlayButton,
  PlayButtonWrapper,
  ResultCardWrapper,
} from './styles';
import ResultsModal from '../../components/ResultsModal';
import {resultsModalState} from '../../store/app-state';
import Loading from '../../components/Loading';

const Circuit = ({route, navigation}: any) => {
  const {colors} = useTheme();
  const {data} = route.params;

  const [circuitImage, setCircuitImage] = useState<any>();
  const [qualyResults, setQualyResults] = useState([]);
  const [qualyDisabled, setQualyDisabled] = useState(true);
  const [raceResults, setRaceResults] = useState([]);
  const [raceDisabled, setRaceDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useRecoilState(resultsModalState);
  const [resultType, setResultType] = useState('');

  const baseUrl = 'http://ergast.com/api/f1';

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

  useEffect(() => {
    setCircuitImage(circuits[data.Circuit.circuitId]);
    getQualyResult();
    getRaceResult();
  }, []);

  const getQualyResult = async () => {
    setLoading(true);
    const response = await axios.get(
      `${baseUrl}/${data.season}/${data.round}/qualifying.json`,
    );
    setLoading(false);
    setQualyResults(response.data.MRData.RaceTable.Races[0].QualifyingResults);
    response?.data?.MRData?.RaceTable?.Races[0] && setQualyDisabled(false);
  };

  const getRaceResult = async () => {
    setLoading(true);
    const response = await axios.get(
      `${baseUrl}/${data.season}/${data.round}/results.json`,
    );
    setLoading(false);
    setRaceResults(response.data.MRData.RaceTable.Races[0].Results);
    response?.data?.MRData?.RaceTable?.Races[0] && setRaceDisabled(false);
  };

  const handleQualyPress = () => {
    setModalVisible(true);
    setResultType('qualy');
  };

  const handleRacePress = () => {
    setModalVisible(true);
    setResultType('race');
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  if (loading) {
    return <Loading />;
  }

  const handlePlay = () => {
    navigation.navigate('Play', {circuitId: data.Circuit.circuitId});
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
      <Separator size={40} />
      <PlayButtonWrapper>
        <PlayButton onPress={handlePlay}>
          <TextHighSpeed fontSize={18} color={colors.black}>
            Play
          </TextHighSpeed>
        </PlayButton>
      </PlayButtonWrapper>

      <ResultsModal
        visible={modalVisible}
        data={resultType === 'qualy' ? qualyResults : raceResults}
      />
    </MainWrapper>
  );
};

export default Circuit;
