import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeView from '../../../screens/Auth/view/WelcomeView/view/WelcomeView';
import SignInView from '../../../screens/Auth/view/SigninView/view/SigninView';
import LoginView from '../../../screens/Auth/view/LoginView/view/LoginView';
import TodoView from '../../../screens/Todo/View/TodoView';


const AuthStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="WelcomeView"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name={'WelcomeView'} component={WelcomeView} />
            <Stack.Screen name={'LoginView'} component={LoginView} />
            <Stack.Screen name={'SignInView'} component={SignInView} />
            <Stack.Screen name={'Todo'} component={TodoView} />
        </Stack.Navigator>
    );
};

export default AuthStack;
