import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';
import colors from '../../../../../../../ui/colors/colors';

const LoginInput = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                    <Text>
                        Zaloguj się
                    </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={'Login'}
                        style={styles.input}
                    />
                    <TextInput
                    placeholder={'Hasło'}
                    secureTextEntry={true}
                    style={styles.input}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',

    },
    titleContainer: {
        width: '100%',
    },
    inputContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        backgroundColor: colors.secondary,
        opacity: 0.5,
        borderRadius: 10,
        height: 50,
    }
});

export default LoginInput;
