/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

//import library section
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

// import component and interfaces section
import {NavigationContainerProps} from '@react-navigation/native';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';

type Props = {
    navigation: NavigationContainerProps;
}



const WelcomeView = ({navigation}: Props) => {
    return (
            <SafeAreaView style={styles.mainContainer}>
                <Text>dsadsa</Text>
            </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: GLOBAL_COLORS.primary
    },
    headerContainer: {
        flex:1
    },
    lottieContainer: {
        flex:4,
        padding: 20,
        top: '5%',
    },
    loginContainer: {
        flex:1,
    }
})

export default WelcomeView;
