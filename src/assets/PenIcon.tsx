import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {DARK_GRAY} from '../constants/colors';

export const PenIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill={DARK_GRAY} {...props}>
    <Path d="M5.05 19h1.3l8.575-8.575-1.3-1.3L5.05 17.7zM19.325 9 15.05 4.75l1.225-1.225q.65-.675 1.6-.675.95 0 1.625.65l1.175 1.2q.625.6.637 1.45.013.85-.587 1.45zm-1.45 1.45L7.25 21.1h-4.3v-4.275L13.6 6.175zm-3.6-.675-.65-.65 1.3 1.3z" />
  </Svg>
);
