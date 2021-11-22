import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const LoginScreen = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View>
            <TextInput
                autoCapitalize= 'none'
                autoCorrect={false}
                placeholder='enter username' 
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
             <TextInput
                autoCapitalize= 'none'
                autoCorrect={false}
                placeholder='enter password' 
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
} 


let styles = StyleSheet.create({
    backgroundStyle: {
        marginHorizontal: 15,
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        backgroundColor: 'lightgray',
        margin: 5,
        padding: 5,
        fontSize: 18,
    }
})

export default LoginScreen;