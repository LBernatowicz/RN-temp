/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

//import library section
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

// import lottie section
const pokeball = require('../../../../../../../assets/pictures/Pokeball2.png')
const pikachu = require('../../../../../../../assets/pictures/pikachu_under_pokeball.png')



const WelcomeAnimation = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={pokeball} style={styles.pokeballImage}/>
            </View>
            <View style={styles.imageContainer}>
                <Image source={pikachu} style={styles.pikachuImage}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        position: 'absolute',
    },
    pokeballImage: {
        transform: [{
            scale: 0.1
        }],
        right: 10
    },
    pikachuImage: {
        transform: [{
            scale: 0.3
        }],
        bottom: '25%',
    },
    meowImage: {
        transform: [{
            scale: 0.5
        }],
        left: '35%',
        top: '30%',
    },
    bulbazaurImage: {
        transform: [{
            rotateY: '180deg',
        }],
        left: '35%',
        top: '30%',
    },
})

export default WelcomeAnimation;
