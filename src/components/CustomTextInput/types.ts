import {TextInputProps} from 'react-native';
import {Control} from 'react-hook-form';

export interface ICustomTextInputProps extends TextInputProps {
  focused?: boolean;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  control: Control;
  name: string;
}

export type CustomInputType = Pick<ICustomTextInputProps, 'focused'>;
