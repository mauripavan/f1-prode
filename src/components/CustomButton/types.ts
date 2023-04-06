import {TouchableOpacityProps} from 'react-native';

export interface IButtonProps extends TouchableOpacityProps {
  text?: string;
  variant?: ButtonVariants;
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
}

export enum ButtonVariants {
  Primary = 'Primary',
  Disabled = 'Disabled',
  Secondary = 'Secondary',
}
