import React from 'react';
import {Modal, View, FlatList} from 'react-native';
import {useRecoilState} from 'recoil';

import {driversModalState} from '../../store/app-state';
import DriverItem from '../DriverItem';
import FlatlistHeader from './FlatlistHeader';
import {MainModalWrapper, SubModalWrapper} from './styles';
import {ISelectDriverModalProps} from './types';

const SelectDriverModal = (props: ISelectDriverModalProps) => {
  const [modalVisible] = useRecoilState(driversModalState);
  const {driversData} = props;

  function compare(a: any, b: any) {
    if (a.Constructor.name < b.Constructor.name) {
      return -1;
    }
    if (a.Constructor.name > b.Constructor.name) {
      return 1;
    }
    return 0;
  }

  const newSortedDdata = driversData.sort(compare);

  const renderItem = ({item, index}: any) => {
    return (
      <DriverItem
        name={item.Driver.givenName}
        lastName={item.Driver.familyName}
        team={item.Constructor.name}
        index={index}
      />
    );
  };

  return (
    <View>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <MainModalWrapper>
          <SubModalWrapper>
            <FlatList
              data={newSortedDdata}
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={<FlatlistHeader />}
            />
          </SubModalWrapper>
        </MainModalWrapper>
      </Modal>
    </View>
  );
};

export default SelectDriverModal;
