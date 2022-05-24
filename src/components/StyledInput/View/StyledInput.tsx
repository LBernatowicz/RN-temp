/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * add Styled input
 * 20.04.2022
 */

import React, {ReactNode} from 'react';
import {
    Image,
    StyleProp,
    StyleSheet,
    TextInput,
    TextStyle, TouchableOpacity,
    View,
} from 'react-native';
import GLOBAL_COLORS from '../../../ui/colors/colors';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../ui/fonts/fonts';
import StyledText from '../../StyledText/View/StyledText';
import Exit from '../../../assets/svg/Exit';

type Props = {
    title?: string;
    label?: string;
    icon?: ReactNode,
    iconPress?: () => void;
    visibleWarning?: boolean;
    warningLabel?: string;
    labelFont?: string;
    labelFontSize?: number;
    labelColor?: string;
    labelOpacity?: number;
    labelStyle?: StyleProp<TextStyle>
    inputStyle?: StyleProp<TextStyle>
    value?: string;
    onChangeText?: ( text: string)=>void
    secure?: boolean;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad'
}

const StyledInput = ({
                         title,
                         label,
                         labelFont,
                         labelFontSize,
                         labelColor,
                         labelOpacity,
                         labelStyle,
                         inputStyle,
                         value,
                         onChangeText,
                         secure,
                         keyboardType,
                         warningLabel,
                         visibleWarning,
                         icon,
                         iconPress,
                         ...rest
}: Props) => {

    return (
        <View style={styles.mainContainer}>
                <View style={styles.labelContainer}>
                    <StyledText
                        title={label ? label : ''}
                        font={labelFont ? labelFont : GLOBAL_FONTS.ROBOTO}
                        fSize={labelFontSize ? labelFontSize : GLOBAL_FONTSIZES.info}
                        fColor={labelColor ? labelColor : GLOBAL_COLORS.primary}
                        fOpacity={labelOpacity ? labelOpacity : 1}
                        externalStyle={labelStyle ? labelStyle : [{}]}
                    />
                </View>
            <View style={styles.inputContainer}>
                <TextInput
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secure}
                    keyboardType={keyboardType}
                    placeholder={title}
                    style={inputStyle ? inputStyle : styles.input}
                    {...rest}
                />
                {icon &&
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={iconPress}
                    >
                        {icon}
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.labelContainer}>
                {visibleWarning ?
                    <StyledText
                        title={warningLabel ? warningLabel : ''}
                        font={labelFont ? labelFont : GLOBAL_FONTS.ROBOTO}
                        fSize={labelFontSize ? labelFontSize : GLOBAL_FONTSIZES.description}
                        fColor={labelColor ? labelColor : GLOBAL_COLORS.red}
                        fOpacity={labelOpacity ? labelOpacity : 1}
                        externalStyle={styles.falseText}
                    />
                    :
                    <View
                        style={styles.falseText}
                    />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelContainer: {
        width:'100%',
    },
    inputContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 50,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: GLOBAL_COLORS.white,
        color: GLOBAL_COLORS.primary,
        paddingHorizontal:10,
        borderRadius:10,
        borderBottomWidth: 1,
        borderColor: GLOBAL_COLORS.disabled,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.info
    },
    falseText:{
        height:20,
    },
    iconButton:{
        position: 'absolute',
        paddingRight: 15,
    }
})

export default StyledInput;
