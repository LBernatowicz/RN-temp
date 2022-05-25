/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add CircleArrow svg
 * 19.04.2022
 */

import * as React from "react";
import Svg, {  Path } from "react-native-svg";
import GLOBAL_COLORS from '../../ui/colors/colors';

const Wave1 = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        {...props}
    >
        <Path
            fill="#1A54F8"
            fillOpacity={1}
            d="M0,224L48,208C96,192,192,160,288,133.3C384,107,480,85,576,106.7C672,128,768,192,864,197.3C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
    </Svg>
);

export default Wave1;
