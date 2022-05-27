import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PrimaryButton from '../../../../../components/PrimaryButton/View/PrimaryButton';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import Divider from '../../../../../components/Divider/View/Divider';
import StyledInput from '../../../../../components/StyledInput/View/StyledInput';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';
import Letter from '../../../../../assets/svg/Letter';
import Locker from '../../../../../assets/svg/Locker';

import auth from '@react-native-firebase/auth';


type Props = {
    navigation: any
}

const LoginInput = ({navigation}: Props) => {
    const [email, setEmail] = useState<string>('admin')
    const [password, setPassword] = useState<string>('12345')
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [user, setUser] = useState<any>()
    const [errorText, setErrorText] = useState<string>()

    const handleSubmitPress = () => {
        setErrorText('')
        if (!email) {console.log('please fill email')}
        if (!password) {console.log('please fill password')}

        auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log('user', user)
                if (user) {navigation.navigate('Todo')}
            })
            .catch((error) => {
                console.log('error', error)
                if (error.code === "auth/invalid-email")
                    {setErrorText(error.message);}
                else if (error.code === "auth/user-not-found")
                    {setErrorText("No User Found");}
                else {
                    setErrorText(
                        "Please check your email id or password"
                    );
                }
            });
    }


    const handleShowPassword = () => {
        setShowPassword(false)
        setTimeout(()=>setShowPassword(true),2000)
    }

    const signin = (email: any, pass: any) => {
        try {
             auth().signInWithEmailAndPassword(email, pass).then(r => setUser(r));
        } catch (error) {
            console.log(error);
        }
    };

    const handleVerify = () => {
        signin(email, password)

        if ((auth().currentUser)) {navigation.navigate('Todo')}
    }

    useEffect(()=> {
        auth().signOut().then(r => console.log(r))
    },[])

    return (
        <View style={styles.mainContainer}>
            <StyledInput
                value={email}
                title={'email...'}
                inputStyle={styles.inputTransparent}
                icon={<Letter/>}
                onChangeText={(value) => setEmail(value)}
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
                onPress={()=>handleSubmitPress()}
            />
            <Divider title={'or email via'}/>
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
