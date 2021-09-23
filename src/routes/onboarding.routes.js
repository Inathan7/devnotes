import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/onboarding/Welcome';
import GetUsername from '../pages/onboarding/GetUsername';

const Stack = createStackNavigator();

export default function OnboardingRoutes() {
    return (

        <Stack.Navigator screenOption={{
            title: null
        }}>
            <Stack.Screen
                name='welcome'
                component={Welcome}
            />
            <Stack.Screen
                name='getUsername'
                component={GetUsername}
            />
        </Stack.Navigator>
    );
}