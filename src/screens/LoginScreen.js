import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const LoginScreen = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
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
        backgroundColor: 'lightgray',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
})

export default LoginScreen;