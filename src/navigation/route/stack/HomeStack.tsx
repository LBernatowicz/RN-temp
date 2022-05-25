/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * AccountStack
 * 22.04.2022
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TodoView from '../../../screens/Todo/View/TodoView';

const HomeStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName="Todo"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name={'Todo'} component={TodoView}/>
        </Stack.Navigator>
    )
}

export default HomeStack;
