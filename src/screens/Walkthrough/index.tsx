import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Carousel from '../../components/Carousel';
import {MainWrapper} from './styles';

const slideList = [
  {
    id: 0,
    title: 'Bienvenidos',
    description: 'Completa tu perfil y tu escuderia de preferencia.',
  },
  {
    id: 1,
    title: 'Realiza tu apuesta',
    description:
      'Aposta como crees que van a quedar las primeras 10 posiciones.',
  },
  {
    id: 2,
    title: 'Activa las notificaciones',
    description:
      'Activa las notificaciones para no olvidate de realizar tus apuestas para cada carrera.',
  },
  {
    id: 3,
    title: 'A jugar! 🏎',
    description:
      'AL finalizar el campeonato, el jugar que sume mas puntos recibira importantes premios.',
  },
];

const Walkthrough = ({navigation}: any) => {
  const [index, setIndex] = useState(0);

  const getData = async () => {
    const value = await AsyncStorage.getItem('userConfig');
    if (value) {
      navigation.navigate('Menu');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainWrapper>
      <Carousel
        list={slideList}
        index={index}
        setIndex={setIndex}
        navigation={navigation}
      />
    </MainWrapper>
  );
};

export default Walkthrough;
