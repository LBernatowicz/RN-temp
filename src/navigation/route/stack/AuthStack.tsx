import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeView from '../../../screens/Auth/view/WelcomeView/view/WelcomeView';


const AuthStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="WelcomeView"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name={'WelcomeView'} component={WelcomeView} />
        </Stack.Navigator>
    );
};

export default AuthStack;
