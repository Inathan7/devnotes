import React from 'react';

import { View, Text, Button } from 'react-native';

export default function Welcome({ navigation }) {

    function navigateToGetUsernamePage() {
        navigation.navigate('getUsername', {
            text: 'um texto qualquer...',
            color: 'green',
            number: 5
        })
    }
    return (
        <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>Tela Welcome</Text>

            <Button
                title='NAVEGAR'
                onPress={navigateToGetUsernamePage}
            />
        </View>
    )
}