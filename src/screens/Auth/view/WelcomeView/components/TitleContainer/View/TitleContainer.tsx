/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import StyledText from '../../../../../../../components/StyledText/View/StyledText';
import GLOBAL_COLORS from '../../../../../../../ui/colors/colors';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../../../ui/fonts/fonts';

const TitleContainer = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.upperText}>
                <StyledText
                    title={'Welcome to'}
                    fColor={GLOBAL_COLORS.white}
                    fSize={GLOBAL_FONTSIZES.info}
                    font={GLOBAL_FONTS.ROBOTO}
                    fOpacity={0.75}
                />
            </View>
            <View style={styles.mainText}>
                <StyledText
                    title={'Pokedex'}
                    fColor={GLOBAL_COLORS.fourth}
                    font={GLOBAL_FONTS.ROBOTO_BOLD}
                    fSize={GLOBAL_FONTSIZES.title}
                    fOpacity={0.75}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   mainContainer: {
       flex:1,
       justifyContent: 'center',
   },
    upperText: {
       justifyContent: 'center',
    },
    mainText: {
        justifyContent: 'center',
    },
});

export default TitleContainer;
