import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
// import Ripple from 'react-native-material-ripple';
import {EmptyStarIcon} from '../../assets/EmptyStarIcon';
import {FillStarIcon} from '../../assets/FillStarIcon';
import {Mail} from '../../common/types/Mail';
import {Typography} from '../../common/ui/Typography';
import {GOOGLE_BLUE_LIGHT} from '../../constants/colors';
import {AuthorImage} from './AuthorImage';

export const Card = ({
  authorName,
  message,
  time,
  title = 'Without title',
}: Mail) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [selectWithButton, setSelectWithButton] = useState(false);

  const handlePress = () => {
    // Here not need use setIsSelected(!isSelected) because
    // we use state trigger in handleAuthorPress() in <AuthorImage />
    // and it not ruine animation :)
    setSelectWithButton(!selectWithButton);
  };

  return (
    <TouchableOpacity
      onLongPress={handlePress}
      onPress={() => setIsRead(true)}
      style={styles.buttonContainer}
      delayLongPress={300}
      // rippleSize={2000}
      // rippleDuration={1500}
      // rippleCentered
    >
      <View
        style={[styles.container, styles.row, isSelected && styles.selected]}>
        <View style={styles.leftSide}>
          <AuthorImage
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            authorName={authorName}
            selectWithButton={selectWithButton}
          />
        </View>
        <View style={[styles.contentContainer, styles.row]}>
          <View style={styles.textContainer}>
            <Typography
              weight={isRead ? '500' : '700'}
              size={18}
              truncate={20}
              numberOfLines={1}
              style={styles.text}>
              {authorName}
            </Typography>
            <Typography
              weight={isRead ? '500' : '700'}
              size={14}
              truncate={30}
              numberOfLines={1}
              style={styles.text}>
              {title}
            </Typography>
            <Typography truncate={32} size={14} numberOfLines={1}>
              {message}
            </Typography>
          </View>
          <View style={styles.rightSide}>
            <Typography size={14} weight={isRead ? '500' : '600'}>
              {time}
            </Typography>
            <TouchableOpacity
              onPress={() => setIsFavorite(!isFavorite)}
              activeOpacity={1}>
              {isFavorite ? <FillStarIcon /> : <EmptyStarIcon />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 16,
  },
  buttonContainer: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  selected: {
    backgroundColor: GOOGLE_BLUE_LIGHT,
  },
  leftSide: {
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  authorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 4,
  },
  rightSide: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
});
