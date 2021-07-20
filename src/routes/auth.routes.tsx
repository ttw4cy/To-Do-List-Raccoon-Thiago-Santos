import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import { Home } from '../screens/Home';
import { List } from '../screens/list';

const { Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen
            name="List"
            component={List}
            />

            <Screen
            name="Home"
            component={Home}
            />

        </Navigator>
    )
}
