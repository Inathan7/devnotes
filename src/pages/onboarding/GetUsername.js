import React from 'react';

import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function GetUsername({ route }) {
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    function chageNavigationOptions() {
        navigation.setOptions({
            title: 'novo título'
        })
    }
    
    return (
        <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>Tela GetUsername</Text>
           
            <Text>{route.params.text}</Text>

            <Button 
                title='VOLTAR'
                color={route.params.color}
                onPress={navigateBack}
            />
            
            <Button 
                title='ALTERAR TÍTULO'
                onPress={chageNavigationOptions}
            /> 

        </View>
    )
}