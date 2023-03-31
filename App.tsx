import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {RecoilRoot} from 'recoil';
import {RootSiblingParent} from 'react-native-root-siblings';

import {ErrorHandler} from './src/components/ErrorHandler';
import theme from './src/theme';
import AppNavigator from './src/navigation/AppNavigator';
import Splash from './src/screens/Splash';
import {fonts} from './assets/fonts';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const fontsMap = {
    HighSpeed: fonts.HighSpeed,
    MontserratEL: fonts.MontserratEL,
    MontserratL: fonts.MontserratL,
    MontserratR: fonts.MontserratR,
    MontserratSB: fonts.MontserratSB,
    Formula1B: fonts.Formula1B,
    Formula1R: fonts.Formula1R,
  };

  useEffect(() => {
    loadResources();
    StatusBar.setBarStyle('light-content');
  }, []);

  const loadResources = async () => {
    await Font.loadAsync({
      ...fontsMap,
    });
    setAppIsReady(true);
    await SplashScreen.hideAsync();
  };

  return (
    <RootSiblingParent>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <ErrorHandler>
            <NavigationContainer>
              {appIsReady && <AppNavigator />}
              <Splash />
            </NavigationContainer>
          </ErrorHandler>
        </ThemeProvider>
      </RecoilRoot>
    </RootSiblingParent>
  );
};

export default () => <App />;
