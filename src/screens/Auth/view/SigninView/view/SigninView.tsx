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
import StyledText from '../../../../../components/StyledText/View/StyledText';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';
import ContainerHeader from '../../../../../components/ContainerHeader/View/ContainerHeader';
import Wave2 from '../../../../../assets/svg/Wave2';
import SignInInput from '../components/SignInInput/View/SignInInput';

type Props = {
    navigation: NavigationContainerProps;
}



const SignInView = ({navigation}: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <ContainerHeader navigation={navigation} />
                <View style={{width: 200, position: 'absolute', top: '45%', left: 20}}>
                    <StyledText
                        title={'Create Account!'}
                        fSize={GLOBAL_FONTSIZES.title}
                        fColor={GLOBAL_COLORS.white}
                        font={GLOBAL_FONTS.ROBOTO_BOLD}
                    />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Wave2 style={{position: 'absolute', bottom: '45%'}}/>
                <View style={styles.signInContainer}>
                    <SignInInput navigation={navigation}/>
                </View>
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
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bottomContainer: {
        flex:2,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: GLOBAL_COLORS.white
    },
    signInContainer: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 40,
        backgroundColor: 'transparent'
    },

})

export default SignInView;
