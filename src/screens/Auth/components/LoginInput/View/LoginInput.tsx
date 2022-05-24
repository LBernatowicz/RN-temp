import React from 'react';
import {View, StyleSheet} from 'react-native';
import PrimaryButton from '../../../../../components/PrimaryButton/View/PrimaryButton';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import Divider from '../../../../../components/Divider/View/Divider';
import StyledInput from '../../../../../components/StyledInput/View/StyledInput';
import Exit from '../../../../../assets/svg/Exit';

const LoginInput = () => {
    return (
        <View style={styles.mainContainer}>
            <StyledInput title={'email'} />
            <StyledInput
                title={'password'}
                icon={Exit}
            />
            <PrimaryButton
                title={'Login'}
                bgColor={GLOBAL_COLORS.primary}
            />
            <Divider title={'or'}/>
            <PrimaryButton
                title={'Sign In'}
                fColor={GLOBAL_COLORS.disabled}
                reverseColorButton={GLOBAL_COLORS.disabled}
                reverseButton
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',

    }
})

export default LoginInput;
