import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import {Animated, Dimensions} from 'react-native';
import {useTheme} from 'styled-components';

import {images} from '../../assets/images';
import {heightPixel, widthPixel} from '../constants/metrics';

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Splash = () => {
  const [isShown, setIsShown] = React.useState(true);
  const opacity = React.useRef(new Animated.Value(1));
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const {colors} = useTheme();

  React.useEffect(() => {
    const animate = async () => {
      Animated.timing(opacity.current, {
        toValue: 0,
        delay: 1500,
        duration: 200,
        useNativeDriver: true,
      }).start();
      await delay(1700);
      setIsShown(false);
    };
    animate();
  }, []);

  if (!isShown) {
    return null;
  }

  return (
    <>
      <Animated.View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: windowWidth,
          height: windowHeight,
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          opacity: opacity.current,
          backgroundColor: colors.black,
        }}
      >
        <Animatable.Image
          animation="fadeIn"
          useNativeDriver
          source={images.f1Logo}
          style={{
            width: widthPixel(186),
            height: heightPixel(150),
            resizeMode: 'contain',
          }}
        />
      </Animated.View>
    </>
  );
};

export default Splash;
