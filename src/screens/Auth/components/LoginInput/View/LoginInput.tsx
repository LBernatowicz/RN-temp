import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PrimaryButton from '../../../../../components/PrimaryButton/View/PrimaryButton';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import Divider from '../../../../../components/Divider/View/Divider';
import StyledInput from '../../../../../components/StyledInput/View/StyledInput';
import circleArrow from '../../../../../assets/svg/CircleArrow';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';
import CircleArrow from '../../../../../assets/svg/CircleArrow';
import Letter from '../../../../../assets/svg/Letter';
import Locker from '../../../../../assets/svg/Locker';

type Props = {
    navigation: any
}

const LoginInput = ({navigation}: Props) => {
    const [login, setLogin] = useState<string>('admin')
    const [password, setPassword] = useState<string>('12345')
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [verify, setVerify] = useState({
        login: false,
        password: false
    })

    const handleShowPassword = () => {
        setShowPassword(false)
        setTimeout(()=>setShowPassword(true),2000)
    }

    const handleAccess = () => {
        if (login === 'admin' && password === '12345') {
            setVerify({
                login: true,
                password: true,
            })
            console.log(verify,'dane poprawne')
        }
        else if (login === 'admin' && password !== '12345') {console.log('złe hasło')}
        else if (login !== 'admin' && password === '12345') {console.log('zły login')}
        else if (login !== 'admin' && password === '12345') {console.log('zły login')}
    }

    const handleVerify = () => {
        handleAccess()
        if ((verify.login && verify.password)) navigation.navigate('Todo')
    }

    return (
        <View style={styles.mainContainer}>
            <StyledInput
                value={login}
                title={'login...'}
                inputStyle={styles.inputTransparent}
                icon={<Letter/>}
                onChangeText={(value) => setLogin(value)}
            />
            <StyledInput
                secure={showPassword}
                value={password}
                title={'password...'}
                icon={<Letter/>}
                iconButton={<Locker/>}
                iconButtonPress={handleShowPassword}
                onChangeText={(value) => setPassword(value)}
            />
            <PrimaryButton
                title={'Login'}
                bgColor={GLOBAL_COLORS.primary}
                onPress={()=>handleVerify()}
            />
            <Divider title={'or login via'}/>
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

    },
    inputTransparent: {
        width: '100%',
        height: 50,
        backgroundColor: 'transparent',
        color: GLOBAL_COLORS.primary,
        paddingHorizontal:35,
        borderRadius:10,
        borderBottomWidth: 1,
        borderColor: GLOBAL_COLORS.disabled,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.info
    },
})

export default LoginInput;
