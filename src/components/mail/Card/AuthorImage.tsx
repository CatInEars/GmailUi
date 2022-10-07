import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {CheckIcon} from '../../../assets/CheckIcon';
import {Typography} from '../../../common/ui/Typography';
import {GOOGLE_BLUE} from '../../../constants/colors';
import {getRandomLightColor} from '../../../modules/colors';

interface IProps {
  isSelected: boolean;
  setIsSelected: (value: boolean) => void;
  authorName: string;
}

export const AuthorImage = ({
  isSelected,
  setIsSelected,
  authorName,
}: IProps) => {
  const [authorColor] = useState(getRandomLightColor());

  const rotate = useRef(new Animated.Value(0)).current;

  const handleAuthorPress = () => {
    Animated.timing(rotate, {
      toValue: isSelected ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setIsSelected(!isSelected);
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
                  outputRange: ['0deg', '-180deg'],
                }),
              },
            ],
            opacity: rotate.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          }}>
          <TouchableOpacity
            style={[styles.authorImage, {backgroundColor: authorColor}]}
            onPress={handleAuthorPress}
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
                rotateY: rotate.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['-180deg', '0deg'],
                }),
              },
            ],
            opacity: rotate.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          }}>
          <TouchableOpacity
            style={[styles.authorImage, {backgroundColor: GOOGLE_BLUE}]}
            onPress={handleAuthorPress}
            activeOpacity={1}>
            <CheckIcon />
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
