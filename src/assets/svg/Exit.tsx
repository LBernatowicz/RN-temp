/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add exit svg
 * 19.04.2022
 */

import * as React from "react";
import Svg, {  Path } from "react-native-svg";
import GLOBAL_COLORS from '../../ui/colors/colors';

const Exit = (props: any) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill={GLOBAL_COLORS.primary}
        {...props}
    >
        <Path d="M13.984 1.422 8.406 7l5.578 5.578-1.406 1.406L7 8.406l-5.578 5.578-1.406-1.406L5.594 7 .016 1.422 1.422.016 7 5.594 12.578.016l1.406 1.406Z" />
    </Svg>
);

export default Exit;
