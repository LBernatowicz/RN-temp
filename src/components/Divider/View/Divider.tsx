import React from 'react';
import {TouchableOpacity, StyleSheet, SafeAreaView, ViewStyle, StyleProp, View} from 'react-native';
import StyledText from '../../StyledText/View/StyledText';
import hairlineWidth = StyleSheet.hairlineWidth;
import GLOBAL_COLORS from '../../../ui/colors/colors';
import {GLOBAL_FONTSIZES} from '../../../ui/fonts/fonts';

type Props = {
    title: string;

}

const Divider = ({title}: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.lineContainer}/>
            <StyledText
                title={title}
                fColor={GLOBAL_COLORS.disabled}
                fSize={GLOBAL_FONTSIZES.info}
            />
            <View style={styles.lineContainer}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
    },
    lineContainer: {
        flex:1,
        borderTopWidth:1,
        borderColor: GLOBAL_COLORS.disabled,
    }
})

export default Divider;
