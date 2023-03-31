import React from 'react';
import {Modal, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useRecoilState} from 'recoil';
import {useTheme} from 'styled-components';

import {icons} from '../../../assets/icons';
import {images} from '../../../assets/images';
import {fontPixel} from '../../constants/metrics';
import {resultsModalState} from '../../store/app-state';
import ResultItem from '../ResultItem';
import Separator from '../Separator';
import {TextMontserratSB} from '../Typography';
import {
  CloseButton,
  CloseButtonWrapper,
  HeaderWrapper,
  LogoHeader,
  MainModalWrapper,
  SubModalWrapper,
  TableHeader,
} from './styles';
import {IResultsModalProps} from './types';

const ResultsModal = (props: IResultsModalProps) => {
  const {visible, data} = props;
  const {colors} = useTheme();

  const [, setModalVisible] = useRecoilState(resultsModalState);

  const onClosePress = () => {
    setModalVisible(false);
  };

  const renderItem = ({item, index}: any) => {
    return <ResultItem data={item} key={index} index={index} />;
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <MainModalWrapper>
          <SubModalWrapper>
            <HeaderWrapper>
              <CloseButtonWrapper onPress={onClosePress}>
                <CloseButton source={icons.close} />
              </CloseButtonWrapper>
              <LogoHeader source={images.f1Logo} resizeMode="contain" />
            </HeaderWrapper>
            <Separator size={10} />
            <TableHeader>
              <TextMontserratSB
                color={colors.red[1]}
                fontSize={fontPixel(14)}
                style={{flex: 1}}
              >
                #
              </TextMontserratSB>
              <TextMontserratSB
                color={colors.red[1]}
                fontSize={fontPixel(14)}
                style={{flex: 4}}
              >
                Name
              </TextMontserratSB>
              <TextMontserratSB
                color={colors.red[1]}
                fontSize={fontPixel(14)}
                style={{flex: 4}}
              >
                Team
              </TextMontserratSB>
              <TextMontserratSB
                color={colors.red[1]}
                fontSize={fontPixel(14)}
                style={{flex: 2}}
              >
                Time
              </TextMontserratSB>
            </TableHeader>
            <Separator size={10} />

            <FlatList data={data} renderItem={renderItem} />
          </SubModalWrapper>
        </MainModalWrapper>
      </Modal>
    </View>
  );
};

export default ResultsModal;
