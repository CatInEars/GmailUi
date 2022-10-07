import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {truncater} from '../../modules/truncater';

interface IProps {
  children?: string;
  style?: TextStyle;
  size?: TextStyle['fontSize'];
  color?: TextStyle['color'];
  weight?: TextStyle['fontWeight'];
  truncate?: number;
}

export const Typography = ({
  children,
  style,
  size = 16,
  color = 'black',
  weight = '300',
  truncate = 0,
}: IProps) => (
  <Text
    style={[
      styles.text,
      style,
      {
        fontSize: size,
        color: color,
        fontWeight: weight,
      },
    ]}>
    {truncater(children ?? '', truncate)}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontWeight: '300',
  },
});
