import React from 'react';
import {Dimensions, FlatList, Modal, View} from 'react-native';
import {useTheme} from 'styled-components';

import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../constants/metrics';
import FinalScoreItem from '../FinalScoreItem';
import Separator from '../Separator';
import {TextFormula1B, TextFormula1R, TextMontserratSB} from '../Typography';

export interface IResultsModalProps {
  visible: boolean;
  data: any[];
}

const SeeResultsModal = (props: IResultsModalProps) => {
  const {colors} = useTheme();
  const {visible, data} = props;

  const renderItem = ({item, index}: any) => {
    return <FinalScoreItem data={item} key={index} index={index} />;
  };

  return (
    <View style={{backgroundColor: 'blue'}}>
      <Modal visible={visible} transparent={true}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: '75%',
            width: Dimensions.get('screen').width,
          }}
        >
          <View
            style={{
              flex: 1,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              backgroundColor: colors.dark[2],
              borderColor: colors.gray[2],
              borderWidth: 1,
            }}
          >
            <Separator size={10} />
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  height: heightPixel(8),
                  width: widthPixel(50),
                  backgroundColor: colors.gray[2],
                  borderRadius: 20,
                }}
              />
              <Separator size={20} />
              <TextFormula1R
                color={colors.white}
                fontSize={fontPixel(14)}
                style={{textAlign: 'center'}}
              >
                Your Score on this Race
              </TextFormula1R>
              <Separator size={10} />
              <TextFormula1B color={colors.green[2]} fontSize={fontPixel(16)}>
                50 pts
              </TextFormula1B>
            </View>
            <Separator size={20} />
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: pixelSizeHorizontal(20),
              }}
            >
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
                Points
              </TextMontserratSB>
            </View>
            <Separator size={10} />
            <FlatList data={data} renderItem={renderItem} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SeeResultsModal;
