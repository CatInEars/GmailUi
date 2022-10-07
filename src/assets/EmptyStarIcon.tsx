import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const EmptyStarIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="darkgray" {...props}>
    <Path d="m8.85 17.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425zM6.575 20.95 8 14.8l-4.775-4.15 6.3-.55L12 4.275l2.475 5.825 6.3.55L16 14.8l1.425 6.15L12 17.7zM12 13.25z" />
  </Svg>
);
