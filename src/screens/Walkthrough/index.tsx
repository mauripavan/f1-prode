import React, {useState} from 'react';

import Carousel from '../../components/Carousel';
import {MainWrapper} from './styles';

const slideList = [
  {
    id: 0,
    title: 'Welcome',
    description: 'Create an account to start playing.',
  },
  {
    id: 1,
    title: 'Races',
    description: 'Each race is gonna be unlock 2 days before its start',
  },
  {
    id: 2,
    title: 'Make your bet',
    description: 'Once unlocked, make your guess for the first 10 positions',
  },
  {
    id: 3,
    title: 'Play against yous friends! 🏎',
    description:
      'You earn 10 points for each correct position. Compare your results with you friends at the end of the champsionship',
  },
];

const Walkthrough = ({navigation}: any) => {
  const [index, setIndex] = useState(0);

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
