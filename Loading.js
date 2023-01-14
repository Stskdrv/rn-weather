import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Loading = () =>  {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content'/>
            <Text style={styles.text}>
                Loading weather data... 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 40,
        paddingVertical: 100,
        backgroundColor: '#FDF6AA'
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30
    }
})

export default Loading;