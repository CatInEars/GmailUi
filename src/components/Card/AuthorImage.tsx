/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {CheckIcon} from '../../assets/CheckIcon';
import {Typography} from '../../common/ui/Typography';
import {GOOGLE_BLUE} from '../../constants/colors';
import {getRandomLightColor} from '../../modules/colors';

interface IProps {
  isSelected: boolean;
  setIsSelected: (value: boolean) => void;
  authorName: string;
  selectWithButton: boolean;
}

export const AuthorImage = ({
  isSelected,
  setIsSelected,
  authorName,
  selectWithButton,
}: IProps) => {
  const [authorColor] = useState(getRandomLightColor());
  const [firstRender, setIsFirstRender] = useState(true);

  const rotate = useRef(new Animated.Value(0)).current;
  const rotateSecond = useRef(new Animated.Value(0)).current;
  const checkAnimate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (firstRender) {
      setIsFirstRender(false);
      return;
    }
    handleAuthorPress();
  }, [selectWithButton]);

  const handleAuthorPress = () => {
    if (!isSelected) {
      Animated.timing(rotate, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(rotateSecond, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          Animated.timing(checkAnimate, {
            toValue: 1,
            useNativeDriver: false,
            duration: 300,
          }).start();
        });
        setIsSelected(!isSelected);
      });
    } else {
      Animated.timing(checkAnimate, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(rotateSecond, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          Animated.timing(rotate, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        });
        setIsSelected(!isSelected);
      });
    }
  };

  return (
    <>
      {!isSelected ? (
        <Animated.View
          style={{
            transform: [
              {
                rotateY: rotate.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '90deg'],
                }),
              },
            ],
          }}>
          <TouchableOpacity
            style={[styles.authorImage, {backgroundColor: authorColor}]}
            onPress={() => handleAuthorPress()}
            activeOpacity={1}>
            <Typography
              color="white"
              size={24}
              weight="500"
              style={styles.decor}>
              {authorName[0].toUpperCase()}
            </Typography>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <Animated.View
          style={{
            transform: [
              {
                rotateY: rotateSecond.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['90deg', '0deg'],
                }),
              },
            ],
          }}>
          <TouchableOpacity
            style={[styles.authorImage, {backgroundColor: GOOGLE_BLUE}]}
            onPress={() => handleAuthorPress()}
            activeOpacity={1}>
            <Animated.View
              style={{
                opacity: checkAnimate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              }}>
              <CheckIcon />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decor: {
    paddingLeft: 1,
  },
});
