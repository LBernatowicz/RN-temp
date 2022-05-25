/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add CircleArrow svg
 * 19.04.2022
 */

import * as React from "react";
import Svg, {  Path } from "react-native-svg";
import GLOBAL_COLORS from '../../ui/colors/colors';

const Wave2 = (props: any) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
        <Path
            fill="#1A54F8"
            fillOpacity={1}
            d="M0,128L48,133.3C96,139,192,149,288,128C384,107,480,53,576,74.7C672,96,768,192,864,213.3C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
    </Svg>
);

export default Wave2;
