import {ImageSourcePropType, PressableProps} from 'react-native';

export interface IRaceCardProps extends PressableProps {
  name: string;
  icon: ImageSourcePropType;
}
