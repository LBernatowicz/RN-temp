import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PrimaryButton from '../../../../../../../components/PrimaryButton/View/PrimaryButton';
import GLOBAL_COLORS from '../../../../../../../ui/colors/colors';
import Divider from '../../../../../../../components/Divider/View/Divider';
import StyledInput from '../../../../../../../components/StyledInput/View/StyledInput';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../../../ui/fonts/fonts';
import Letter from '../../../../../../../assets/svg/Letter';
import Locker from '../../../../../../../assets/svg/Locker';

import auth from '@react-native-firebase/auth';


type Props = {
    navigation: any
}

const SignInInput = ({navigation}: Props) => {
    const [userEmail, setUserEmail] = useState<string>('admin')
    const [userName, setUserName] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('12345')
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [errorText, setErrorText] = useState<string>('')

    const handleSubmitPress = () => {
        setErrorText('')
        if (!userName) {console.log(errorText)}
        if (!userEmail) {console.log(errorText)}
        if (!userPassword) {console.log(errorText)}

        auth().createUserWithEmailAndPassword(userEmail, userPassword)
            .then((user) => {
                console.log('Registration Successful. Please Login to proceed:', user)
                if (user) {
                    auth().currentUser?.updateProfile({
                        displayName: userName,
                        photoURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png'
                    })
                        .then(()=> navigation.navigate('Todo'))
                        .catch((error) => {
                            console.log('error', error)
                        })
                    }
            })
            .catch((error) => {
                console.log('error', error)
                if (error.code === "auth/email-already-in-use")
                    {setErrorText("That email address is already in use!");}
                else {
                    setErrorText(error.message);
                }
            });
    }


    const handleShowPassword = () => {
        setShowPassword(false)
        setTimeout(()=>setShowPassword(true),2000)
    }

    useEffect(()=> {
        auth().signOut().then(r => console.log(r))
    },[])

    return (
        <View style={styles.mainContainer}>
            <StyledInput
                value={userName}
                title={'Login...'}
                inputStyle={styles.inputTransparent}
                icon={<Letter/>}
                onChangeText={(value) => setUserName(value)}
            />
            <StyledInput
                value={userEmail}
                title={'userEmail...'}
                inputStyle={styles.inputTransparent}
                icon={<Letter/>}
                onChangeText={(value) => setUserEmail(value)}
            />
            <StyledInput
                secure={showPassword}
                value={userPassword}
                title={'userPassword...'}
                icon={<Letter/>}
                iconButton={<Locker/>}
                iconButtonPress={handleShowPassword}
                onChangeText={(value) => setUserPassword(value)}
            />
            <PrimaryButton
                title={'Sign In'}
                bgColor={GLOBAL_COLORS.primary}
                onPress={()=>handleSubmitPress()}
            />
            <Divider title={'or sign in via'}/>
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

export default SignInInput;
