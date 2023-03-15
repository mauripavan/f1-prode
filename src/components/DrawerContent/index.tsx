import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';

import {TextHighSpeed} from '../Typography';
import {images} from '../../../assets/images';
import {
  DrawerContentMainWrapepr,
  ListIcon,
  ListIconWrapper,
  ListItemWrapper,
  LogoImage,
  LogoWrapper,
  NavigationWrapper,
} from './styles';
import useDrawerContent from './useDrawerContent';
import {fontPixel, pixelSizeVertical} from '../../constants/metrics';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const {active, handleNavigation, onLogoPress, screens} = useDrawerContent();
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
        backgroundColor: colors.black,
      }}
    >
      <DrawerContentMainWrapepr>
        <LogoWrapper>
          <TouchableOpacity onPress={onLogoPress}>
            <LogoImage source={images.f1Logo} resizeMode="contain" />
          </TouchableOpacity>
        </LogoWrapper>
        <NavigationWrapper>
          {screens?.map((screen, index) => {
            const isActive = active === screen.to;
            return (
              <ListItemWrapper key={`menu-screen-${screen.name}-${index}`}>
                <ListIconWrapper>
                  <ListIcon source={screen.icon} />
                </ListIconWrapper>
                <TouchableOpacity onPress={() => handleNavigation(screen.to)}>
                  {isActive ? (
                    <TextHighSpeed
                      fontSize={fontPixel(20)}
                      color={colors.white}
                    >
                      {screen.name}
                    </TextHighSpeed>
                  ) : (
                    <TextHighSpeed
                      fontSize={fontPixel(20)}
                      color={colors.white}
                    >
                      {screen.name}
                    </TextHighSpeed>
                  )}
                </TouchableOpacity>
              </ListItemWrapper>
            );
          })}
        </NavigationWrapper>
      </DrawerContentMainWrapepr>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
