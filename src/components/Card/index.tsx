import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
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
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableHighlight pressRetentionOffset={{left: 10}}>
      <View
        style={[styles.container, styles.row, isSelected && styles.selected]}>
        <View style={styles.leftSide}>
          <AuthorImage
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            authorName={authorName}
          />
        </View>
        <View style={[styles.contentContainer, styles.row]}>
          <View style={styles.textContainer}>
            <Typography
              weight="700"
              size={18}
              truncate={20}
              style={styles.text}>
              {authorName}
            </Typography>
            <Typography
              weight="700"
              size={14}
              truncate={30}
              style={styles.text}>
              {title}
            </Typography>
            <Typography truncate={32} size={14}>
              {message}
            </Typography>
          </View>
          <View style={styles.rightSide}>
            <Typography size={14} weight="600">
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
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 16,
  },
  selected: {
    backgroundColor: GOOGLE_BLUE_LIGHT,
  },
  leftSide: {
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    alignSelf: 'flex-start',
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
});
