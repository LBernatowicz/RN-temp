import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import AuthStack from './route/stack/AuthStack';

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth" screenOptions={{headerShown: false}}>
                <Stack.Screen component={AuthStack} name="Auth" />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
