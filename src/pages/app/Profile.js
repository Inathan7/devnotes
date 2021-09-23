import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Profile({ navigation }) {
    function navigateToCreateOrEditNote() {
        navigation.navigate('notes', {
            screen: 'createOrEditNote'
        });
    }

    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:20}}>
                Tela Profile
            </Text>

            <Button 
                title='NAVEGAR...'
                color='purple'
                onPress={navigateToCreateOrEditNote}
            />
        </View>
    )
}