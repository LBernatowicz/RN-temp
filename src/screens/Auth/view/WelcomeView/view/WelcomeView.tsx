/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

//import library section
import React, {} from 'react';
import {View, StyleSheet} from 'react-native';

// import component and interfaces section
import {NavigationContainerProps} from '@react-navigation/native';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import PrimaryButton from '../../../../../components/PrimaryButton/View/PrimaryButton';
import StyledText from '../../../../../components/StyledText/View/StyledText';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';

type Props = {
    navigation: any;
}



const WelcomeView = ({navigation}: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}/>
            <View style={styles.bottomContainer}>
                <StyledText
                    title={'Welcome!'}
                    fSize={GLOBAL_FONTSIZES.title}
                    fColor={GLOBAL_COLORS.white}
                    font={GLOBAL_FONTS.ROBOTO_BOLD}
                />
                <StyledText title={'this the app for something else...'}
                            fSize={GLOBAL_FONTSIZES.info}
                            fColor={GLOBAL_COLORS.white}
                            font={GLOBAL_FONTS.ROBOTO}
                />
                <PrimaryButton
                    title={'Login'}
                    reverseButton
                    onPress={() => navigation.navigate('LoginView')}
                />
                <PrimaryButton
                    title={'Sing in'}
                    fColor={GLOBAL_COLORS.primary}
                    onPress={() => navigation.navigate('SignInView')}
                />
            </View>
        </View>
        )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.primary
    },
    topContainer: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 40,
    },

})

export default WelcomeView;
