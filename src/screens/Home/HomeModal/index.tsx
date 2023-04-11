import React from 'react';
import {Modal} from 'react-native';

import {ButtonVariants} from '../../../components/CustomButton/types';
import {TextFormula1B} from '../../../components/Typography';
import Separator from '../../../components/Separator';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import {MainWrapper} from '../styles';
import {ButtonWrapper, SubWrapper} from './styles';
import useHomeModal from './useHomeModal';

const HomeModal = () => {
  const {
    control,
    errors,
    handleName,
    handleSubmit,
    homeModalvisible,
    isSubmitting,
    isValid,
    colors,
  } = useHomeModal();

  return (
    <Modal transparent={true} visible={homeModalvisible}>
      <MainWrapper>
        <SubWrapper>
          <Separator size={20} />
          <TextFormula1B
            color={colors.green[2]}
            fontSize={18}
            style={{textAlign: 'center'}}
          >
            Welcome to F1 Prode!
          </TextFormula1B>
          <Separator size={20} />
          <TextFormula1B
            color={colors.white}
            fontSize={18}
            style={{textAlign: 'center'}}
          >
            Please let us know your name
          </TextFormula1B>
          <Separator size={20} />

          <CustomTextInput
            placeholder="Name"
            control={control}
            name={'name'}
            error={errors.name ? true : false}
            errorMessage={errors.name?.message?.toString()}
          />
          <Separator size={20} />
          <CustomTextInput
            placeholder="Last Name"
            control={control}
            name={'lastName'}
            error={errors.lastName ? true : false}
            errorMessage={errors.lastName?.message?.toString()}
          />
          <Separator size={30} />

          <ButtonWrapper>
            <CustomButton
              text="Save"
              onPress={handleSubmit(handleName)}
              disabled={isSubmitting}
              fontColor={isValid ? colors.black : colors.gray[2]}
              variant={
                isValid ? ButtonVariants.Secondary : ButtonVariants.Disabled
              }
              fontSize={16}
              style={{width: 150}}
            />
          </ButtonWrapper>
        </SubWrapper>
      </MainWrapper>
    </Modal>
  );
};

export default HomeModal;
