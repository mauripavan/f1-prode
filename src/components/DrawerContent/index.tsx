import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useTheme} from 'styled-components';

import {TextFormula1R, TextHighSpeed} from '../Typography';
import {images} from '../../../assets/images';
import {
  DrawerContentMainWrapepr,
  ListIcon,
  ListIconWrapper,
  ListItemWrapper,
  LogoImage,
  LogOutIcon,
  LogOutWrapper,
  LogoWrapper,
  NavigationWrapper,
} from './styles';
import useDrawerContent from './useDrawerContent';
import {fontPixel, pixelSizeVertical} from '../../constants/metrics';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const {
    active,
    handleNavigation,
    onLogoPress,
    screens,
    handleLogOut,
    logOutIcon,
  } = useDrawerContent();
  const {colors} = useTheme();

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled
      removeClippedSubviews
      renderToHardwareTextureAndroid
      contentContainerStyle={{
        paddingBottom: pixelSizeVertical(20),
        flex: 1,
        backgroundColor: colors.dark[1],
      }}
    >
      <DrawerContentMainWrapepr>
        <LogoWrapper onPress={onLogoPress}>
          <LogoImage source={images.f1Logo} resizeMode="contain" />
        </LogoWrapper>
        <NavigationWrapper>
          {screens?.map((screen, index) => {
            const isActive = active === screen.to;
            return (
              <ListItemWrapper
                onPress={() => handleNavigation(screen.to)}
                key={`menu-screen-${screen.name}-${index}`}
              >
                <ListIconWrapper>
                  <ListIcon source={screen.icon} resizeMode="contain" />
                </ListIconWrapper>
                {isActive ? (
                  <TextHighSpeed fontSize={fontPixel(30)} color={colors.white}>
                    {screen.name}
                  </TextHighSpeed>
                ) : (
                  <TextHighSpeed fontSize={fontPixel(20)} color={colors.white}>
                    {screen.name}
                  </TextHighSpeed>
                )}
              </ListItemWrapper>
            );
          })}
        </NavigationWrapper>
      </DrawerContentMainWrapepr>
      <LogOutWrapper onPress={handleLogOut}>
        <LogOutIcon source={logOutIcon} />
        <TextFormula1R color={colors.white}>Log Out</TextFormula1R>
      </LogOutWrapper>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
