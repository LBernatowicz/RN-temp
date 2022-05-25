/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add CircleArrow svg
 * 19.04.2022
 */

import * as React from "react";
import Svg, {  Path } from "react-native-svg";
import GLOBAL_COLORS from '../../ui/colors/colors';

const CircleArrow = (props: any) => (
    <Svg
        viewBox="0 0 16 16"
        height={16}
        width={16}
        fill='transparent'
        stroke={GLOBAL_COLORS.white}
        strokeWidth={2}
        {...props}>
      <Path
          d="m4 1 8 7-8 7"
      />
    </Svg>
);

export default CircleArrow;
