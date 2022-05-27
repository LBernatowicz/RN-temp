/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * add Styled input
 * 20.04.2022
 */

import React, {ReactNode, useEffect, useState} from 'react';
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
    iconButton?: ReactNode
    iconButtonPress?: () => void;
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
    onSubmit?: any
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
                         iconButtonPress,
                         iconButton,
    onSubmit,
                         ...rest
}: Props) => {
    const [onFocus, setOnFocus] = useState<boolean>(false)
    const handleOnFocus = () => {
        setOnFocus(true)
    }
    const handleOnBlur = () => {
        setOnFocus(false)
    }

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
                    {icon &&
                    <View
                        style={styles.icon}
                    >
                        {icon}
                    </View>
                    }
                <TextInput
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secure}
                    keyboardType={keyboardType}
                    placeholder={title}
                    style={[
                        inputStyle ? inputStyle : styles.input,
                        onFocus ? styles.onFocus : styles.onBlur,
                    ]}
                    onFocus={()=>handleOnFocus()}
                    onBlur={()=>handleOnBlur()}
                    onSubmitEditing={onSubmit}
                    {...rest}
                />
                {iconButton &&
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={iconButtonPress}
                    >
                        {iconButton}
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
        paddingHorizontal:35,
        borderRadius:10,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.info
    },
    falseText:{
        height:20,
    },
    iconButton:{
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center',
        right:8,
        zIndex: 5,
        elevation: 5,
    },
    icon:{
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center',
        left:8,
        bottom:14,
        zIndex: 5,
        elevation: 5,
    },
    onFocus: {
        borderBottomWidth: 2,
        borderColor: GLOBAL_COLORS.primary,
        fontFamily: GLOBAL_FONTS.ROBOTO_BOLD
    },
    onBlur: {
        borderBottomWidth: 1,
        borderColor: GLOBAL_COLORS.disabled,
    }
})

export default StyledInput;
