/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add ContainerHeader
 * 19.04.2022
 */

import React from 'react';
import {SafeAreaView, StyleProp, StyleSheet, TouchableOpacity, View, ViewProps} from 'react-native';
import StyledText from '../../StyledText/View/StyledText';
import CircleArrow from '../../../assets/svg/CircleArrow';
import Exit from '../../../assets/svg/Exit';

type Props = {
    exitButton?: boolean
    title?: string
    handleExit?: ()=>void;
    navigation?: any;
    externalStyle?: StyleProp<ViewProps>
    font?: string;
    fSize?: number;
    fColor?: string;
    fOpacity?: number;
}

const ContainerHeader = ({
                             exitButton,
                             title,
                             handleExit,
                             navigation,
                             externalStyle,
                             font,
                             fSize,
                             fColor,
                             fOpacity,
}: Props) => {
    // function section
    const handleBack = () => navigation.goBack();

    return (
        <SafeAreaView style={[styles.mainContainer, externalStyle]}>
            <TouchableOpacity
                onPress={handleBack}
                style={styles.backContainer}
            >
                <CircleArrow style={styles.backSvg}/>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <StyledText
                    title={title ? title : ''}
                    font={font}
                    fSize={fSize}
                    fColor={fColor}
                    fOpacity={fOpacity}
                />
            </View>
            {exitButton ?
                <TouchableOpacity
                    onPress={handleExit}
                    style={styles.exitContainer}
                >
                    <Exit/>
                </TouchableOpacity>
                :
                <View style={styles.exitContainer}/>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        height: 80,
        alignItems: 'center',
    },
    backContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:4,
    },
    exitContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    backSvg: {
        transform: [
            { rotateX: "180deg" },
            { rotateZ: "180deg" }
        ]
    }
})

export default ContainerHeader;
