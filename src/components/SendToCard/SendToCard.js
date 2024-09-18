import React, { forwardRef } from 'react';
import LottieView from 'lottie-react-native';
import basket from '../../assets/images/lottie/basket.json'
import { StyleSheet } from 'react-native';

const SendToCard = forwardRef(({ onAnimationFinish }, ref) => {
  return (
    <LottieView
      ref={ref}
      source={basket}
      autoPlay
      loop={false}
      onAnimationFinish={onAnimationFinish}
      style={styles.fullscreenAnimation}
    />
  );
});

const styles = StyleSheet.create({
  fullscreenAnimation: {
    width: '100%',
    height: '100%',
  }
});

export default SendToCard;