import React from 'react';
import {doc, setDoc} from 'firebase/firestore/lite';

import {TextFormula1B, TextFormula1R} from '../Typography';
import {MainWrapper} from './styles';
import {IDriverItemProps} from './types';
import db from '../../../firebaseConfig';

const DriverItem = (props: IDriverItemProps) => {
  const {lastName, name, team} = props;

  const handleSelectDriver = async (db: any) => {
    await setDoc(doc(db, 'positions', 'First place'), {
      name: name,
      lastName: lastName,
      team: team,
    });
  };

  return (
    <MainWrapper onPress={() => handleSelectDriver(db)}>
      <TextFormula1B fontSize={16} style={{marginRight: 15}}>
        {name} {lastName}
      </TextFormula1B>
      <TextFormula1R>{team}</TextFormula1R>
    </MainWrapper>
  );
};

export default DriverItem;
