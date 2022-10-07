import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Mail} from '../../common/types/Mail';
import {Typography} from '../../common/ui/Typography';
import {getRandomLightColor} from '../../modules/colors';

export const Card = ({
  authorName,
  message,
  time,
  title = 'Without title',
}: Mail) => (
  <View style={[styles.container, styles.row]}>
    <View style={styles.leftSide}>
      <View
        style={[styles.authorImage, {backgroundColor: getRandomLightColor()}]}
      />
    </View>
    <View style={[styles.contentContainer, styles.row]}>
      <View style={styles.textContainer}>
        <Typography weight="700" size={18} truncate={20} style={styles.text}>
          {authorName}
        </Typography>
        <Typography weight="600" size={15} truncate={32} style={styles.text}>
          {title}
        </Typography>
        <Typography truncate={35} size={14} style={styles.text}>
          {message}
        </Typography>
      </View>
      <View style={styles.rightSide}>
        <Typography size={14} weight="600">
          {time}
        </Typography>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    padding: 12,
  },
  leftSide: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  authorImage: {
    width: 45,
    height: 45,
    borderRadius: 40,
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
    marginTop: 4,
  },
  rightSide: {
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
});
