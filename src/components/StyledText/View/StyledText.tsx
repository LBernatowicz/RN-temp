/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

import React from 'react';
import {View, Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../ui/fonts/fonts';
import GLOBAL_COLORS from '../../../ui/colors/colors';

type Props = {
    title: string | number; // text from parent component
    font?: string; // font style from GLOBAL_FONT
    fColor?: string;  // colors form GLOBAL_COLORS
    fSize?: number; // font size from GLOBAL_FONTSIZE
    fOpacity?: number; // font opacity
    externalStyle?: StyleProp<TextStyle> // external font style
}

const StyledText = ({title, externalStyle, font, fColor, fSize, fOpacity}: Props) => {
    const dynamicStyle = externalStyle
    const dynamicColor = fColor ? fColor : GLOBAL_COLORS.primary
    const dynamicFontSize = fSize ? fSize : GLOBAL_FONTSIZES.header
    const dynamicFont = font ? font : GLOBAL_FONTS.ROBOTO
    const dynamicOpacity = fOpacity ? fOpacity : 1
    return (
        <View style={styles.mainContainer}>
            <Text style={[
                dynamicStyle,
                styles.text,
                {
                    color: dynamicColor,
                    fontSize: dynamicFontSize,
                    fontFamily: dynamicFont,
                    opacity: dynamicOpacity,
                }]}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'transparent',
    },
    text: {
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.info,
        opacity: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
});

export default StyledText;
