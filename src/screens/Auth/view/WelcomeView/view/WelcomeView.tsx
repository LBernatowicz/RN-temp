/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

//import library section
import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

// import component and interfaces section
import {NavigationContainerProps} from '@react-navigation/native';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import hairlineWidth = StyleSheet.hairlineWidth;

type Props = {
    navigation: NavigationContainerProps;
}



const WelcomeView = ({navigation}: Props) => {
    return (
            <View style={styles.mainContainer}>
                <TouchableOpacity
                    style={styles.googleButton}
                >
                    <Text>Google</Text>
                </TouchableOpacity>

            </View>

    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleButton:{
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: hairlineWidth,
        borderRadius: 5,
        backgroundColor: 'cyan'
    }
})

export default WelcomeView;
