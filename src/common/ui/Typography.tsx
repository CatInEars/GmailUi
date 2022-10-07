import React from 'react';
import {Text, StyleSheet, TextStyle, TextProps} from 'react-native';

interface IProps extends TextProps {
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
  weight = '400',
  ...props
}: IProps) => (
  <Text
    {...props}
    style={[
      styles.text,
      style,
      {
        fontSize: size,
        color: color,
        fontWeight: weight,
      },
    ]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontWeight: '300',
  },
});
