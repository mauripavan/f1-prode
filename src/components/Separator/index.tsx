import React from 'react';
import {View} from 'react-native';

import {pixelSizeVertical} from '../../constants/metrics';
import {ISeparator} from './type';

const Separator = (props: ISeparator) => (
  <View style={{height: pixelSizeVertical(props.size)}} />
);

export default Separator;
