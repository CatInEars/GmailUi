import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {PenIcon} from '../assets/PenIcon';
import {Typography} from '../common/ui/Typography';
import {GOOGLE_BLUE_LIGHT} from '../constants/colors';

interface IProps {
  animateTrigger: boolean;
}

export const FlyButton = ({animateTrigger}: IProps) => {
  const scale = useRef(new Animated.Value(0)).current;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleAnimate, [animateTrigger]);

  function handleAnimate() {
    Animated.timing(scale, {
      toValue: animateTrigger ? 0 : 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {}}
      style={styles.button}>
      <Animated.View
        style={[
          styles.container,
          {
            width: scale.interpolate({
              inputRange: [0, 1],
              outputRange: [24, 110],
            }),
          },
        ]}>
        <PenIcon />
        <Animated.Text
          style={[
            {
              opacity: scale.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              right: scale.interpolate({
                inputRange: [0, 1],
                outputRange: [-72, 0],
              }),
            },
            styles.text,
          ]}>
          <Typography weight="600" numberOfLines={1}>
            Compose
          </Typography>
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    borderRadius: 15,
    right: 22,
    bottom: 68,
    padding: 18,
    backgroundColor: GOOGLE_BLUE_LIGHT,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  text: {
    position: 'absolute',
  },
});
