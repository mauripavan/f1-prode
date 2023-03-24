import React from 'react';
import {useRecoilState} from 'recoil';

import {icons} from '../../../../assets/icons';
import {driversModalState} from '../../../store/app-state';
import Separator from '../../Separator';
import {CloseIcon, MainWrapper} from './styles';

const FlatlistHeader = () => {
  const [, setModalVisible] = useRecoilState(driversModalState);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Separator size={15} />
      <MainWrapper onPress={handleModalClose}>
        <CloseIcon source={icons.close} />
      </MainWrapper>
    </>
  );
};

export default FlatlistHeader;
