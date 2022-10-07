import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CheckIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="white" {...props}>
    <Path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
  </Svg>
);
