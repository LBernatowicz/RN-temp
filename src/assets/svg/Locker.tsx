/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add CircleArrow svg
 * 19.04.2022
 */

import * as React from "react";
import Svg, {  Path } from "react-native-svg";
import GLOBAL_COLORS from '../../ui/colors/colors';
import {StyleSheet} from 'react-native';

const Locker = (props: any) => (
    <Svg
        viewBox="0 0 30 30"
        height={20}
        width={20}
        fill='white'
        stroke={GLOBAL_COLORS.primary}
        {...props}>
        <Path d="M17 9.761v-4.761c0-2.761-2.238-5-5-5-2.763 0-5 2.239-5 5v4.761c-1.827 1.466-3 3.714-3 6.239 0 4.418 3.582 8 8 8s8-3.582 8-8c0-2.525-1.173-4.773-3-6.239zm-8-4.761c0-1.654 1.346-3 3-3s3 1.346 3 3v3.587c-.927-.376-1.938-.587-3-.587s-2.073.211-3 .587v-3.587zm3 17c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm2-6c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"/>
    </Svg>
);

export default Locker;
