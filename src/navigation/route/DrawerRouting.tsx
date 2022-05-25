/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add Drawer bar
 * 25.04.2022
 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './stack/HomeStack';
const DrawerRouting = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator
            initialRouteName={'Home'}
            screenOptions={{headerShown: false}}
        >
            <Drawer.Screen name={'Home'} component={HomeStack}/>
        </Drawer.Navigator>
    )
}
export default DrawerRouting;
