import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {useRecoilState} from 'recoil';
import {doc, getDoc} from 'firebase/firestore/lite';

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
import {
  defaultPositions,
  positionsState,
  resultsModalState,
} from '../../store/app-state';
import Loading from '../../components/Loading';
import SeeResultsModal from '../../components/SeeResultsModal';
import db from '../../../firebaseConfig';

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
  const [, setPositions] = useRecoilState(positionsState);
  const [resultType, setResultType] = useState('');
  const [myPositions, setMyPositions] = useState([]);

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
    getResults();
    getPositionsDB();
  }, []);

  const getResults = async () => {
    setLoading(true);

    const qualyResponse = await axios.get(
      `${baseUrl}/${data.season}/${data.round}/qualifying.json`,
    );
    setQualyResults(
      qualyResponse.data.MRData.RaceTable.Races[0].QualifyingResults,
    );
    qualyResponse?.data?.MRData?.RaceTable?.Races[0] && setQualyDisabled(false);

    const raceResponse = await axios.get(
      `${baseUrl}/${data.season}/${data.round}/results.json`,
    );
    if (raceResponse?.data?.MRData?.RaceTable?.Races[0]) {
      setRaceResults(raceResponse.data.MRData.RaceTable.Races[0].Results);
      setRaceDisabled(false);
      setPositions(defaultPositions);
    }

    setLoading(false);
  };

  const getPositionsDB = async () => {
    if (!raceResults) return;

    const positionsRef = doc(db, 'races', data.Circuit.circuitId);
    const result = await getDoc(positionsRef);
    const filteredResult = result.data();

    if (filteredResult?.positions !== undefined) {
      setMyPositions(filteredResult?.positions);
    }
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

  const handlePlay = () => {
    navigation.navigate('Play', {circuitId: data.Circuit.circuitId});
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
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
          <PlayButton disabled={!raceDisabled} onPress={handlePlay}>
            <TextHighSpeed fontSize={fontPixel(14)} color={colors.black}>
              Play
            </TextHighSpeed>
          </PlayButton>
        </PlayButtonWrapper>
        <Separator size={30} />
        <ResultsModal
          visible={modalVisible}
          data={resultType === 'qualy' ? qualyResults : raceResults}
        />
      </MainWrapper>
      {myPositions[0] !== undefined && <SeeResultsModal data={myPositions} />}
    </>
  );
};

export default Circuit;
