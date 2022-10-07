import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {GOOGLE_BLUE} from '../constants/colors';

export const FillStarIcon = (props: SvgProps) => (
  <Svg fill={GOOGLE_BLUE} width={24} height={24} {...props}>
    <Path d="M6.575 20.95 8 14.8l-4.775-4.15 6.3-.55L12 4.275l2.475 5.825 6.3.55L16 14.8l1.425 6.15L12 17.7z" />
  </Svg>
);
