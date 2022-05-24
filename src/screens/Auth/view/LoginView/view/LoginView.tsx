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
import ContainerHeader from '../../../../../components/ContainerHeader/View/ContainerHeader';
import LoginInput from '../../../components/LoginInput/View/LoginInput';

type Props = {
    navigation: NavigationContainerProps;
}



const LoginView = ({navigation}: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <ContainerHeader navigation={navigation}/>
                <View style={{width: 200, position: 'absolute', top: '45%', left: 20}}>
                <StyledText
                    title={'Welcome Back!'}
                    fSize={GLOBAL_FONTSIZES.title}
                    fColor={GLOBAL_COLORS.white}
                    font={GLOBAL_FONTS.ROBOTO_BOLD}
                />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <LoginInput/>
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
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 40,
        backgroundColor: GLOBAL_COLORS.white
    },

})

export default LoginView;
