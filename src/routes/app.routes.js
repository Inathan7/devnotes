import React from 'react';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import NoteList from '../pages/app/NoteList';
import CreateOrEditNote from '../pages/app/CreateOrEditNote';
import NoteView from '../pages/app/NoteView'
import Profile from '../pages/app/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NotesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='noteList' component={NoteList} />
            <Stack.Screen name='noteView' component={NoteView} />
            <Stack.Screen name='createOrEditNote' component={CreateOrEditNote} />
        </Stack.Navigator>
    )
}

export default function AppRoutes() {

    function renderIcon(name, color) {
        return (
            <Icon name={name} size={36} color={color} />
        );
    }

    function getTabBarVisibility(route) {
        const focusedRoute = getFocusedRouteNameFromRoute(route) ?? 'noteList'

        return focusedRoute === 'noteList'
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 14,
                    bottom: 8
                },
                style: {
                    height: 70
                }
            }}
        >
            <Tab.Screen 
                name='notes'
                component={NotesStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color }) => 
                        renderIcon('note-outline', color),
                    tabBarVisible: getTabBarVisibility(route)
                })}
            />
             <Tab.Screen 
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => renderIcon('account-outline')
                }}
            />
        </Tab.Navigator>
    )
}