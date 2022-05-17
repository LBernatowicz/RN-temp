/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 17.04.2022
 */
// library section
import React, {useState} from 'react';
import { StyleSheet,View} from 'react-native';

// components section
import PrimaryButton from '../../../../../../../components/PrimaryButton/View/PrimaryButton';
import colors, {GLOBAL_COLORS} from '../../../../../../../ui/colors/colors';
import StyledText from '../../../../../../../components/StyledText/View/StyledText';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../../../ui/fonts/fonts';
import FontButton from '../../../../../../../components/FontButton/View/FontButton';

// props section
type Props = {
    navigation: any
}

const LoginContainer = ({navigation}: Props) => {
    // hooks section
    const [authType, setAuthType] = useState<boolean>(true)

    //functions section
    const handleAuthType = () => {
        setAuthType(!authType)
    }

    return (
        <View style={styles.loginContainer}>
           <View style={styles.buttonContainer}>
             <PrimaryButton
                 title={authType ? 'Create Account' : 'Login to Pokedex'}
                 onPress={()=> navigation.navigate(authType ? 'Login' : 'CreateAccount')}
             />
           </View>
            <View style={styles.underTextComponent}>
                <View style={styles.styledTextContainer}>
                    <StyledText
                        title={authType ? 'Already have an account?' : 'Login to your account'}
                        fColor={GLOBAL_COLORS.white}
                        font={GLOBAL_FONTS.ROBOTO}
                        fSize={GLOBAL_FONTSIZES.description}
                        externalStyle={styles.externalStyledText}
                    />
                </View>
                <View style={styles.fontButtonContainer}>
                    <FontButton
                        title={authType ? 'Login' : 'Create'}
                        fColor={GLOBAL_COLORS.fourth}
                        font={GLOBAL_FONTS.ROBOTO}
                        fSize={GLOBAL_FONTSIZES.description}
                        onPress={handleAuthType}
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        backgroundColor: colors.primary,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
    },
    loginInput: {
        width: '100%',
        flex:1,
    },
    underTextComponent:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        width: '90%',
    },
    buttonContainer:{
      width: '90%',
        flex:1,
    },
    styledTextContainer: {
        flex: 3,
        alignItems: 'flex-end'
    },
    fontButtonContainer: {
        flex:2,
        alignItems: 'flex-start'
    },
    externalStyledText: {
        textAlign: 'center',
    },
})
export default LoginContainer;
