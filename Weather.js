import React from "react";
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        title: 'Better to stay at home 🥹',
        subtitle: 'Lightning DANGER ⚡️'
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'Don`t forget your unbrella, man!',
        subtitle: 'Today will be rainy!'
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1CB5E0'],
        title: 'Maybe you will get wet',
        subtitle: 'But then tou will see rainbow!'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'Ohh, let it snow...',
        subtitle: 'Maybe you want to make a Snowman?!'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
        title: 'Dusty outside:)',
        subtitle: 'Time to wear facemask again...'
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Just a SMOG',
        subtitle: 'Maybe today you can stay at home?'
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'A little hazy',
        subtitle: 'Found and wear your sweater'
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'Fog... real fog',
        subtitle: 'Scarry a little'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'What`s a sunny day!',
        subtitle: 'Go for a walk!:)'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Clouds',
        subtitle: 'Maybe then will be rain, maybe not...'
    },
};

const Weather = ({temp, condition}) => {
    return (
        <LinearGradient
            colors={[...weatherOptions[condition].gradient, '#192f6a']}
            style={styles.container}>
            <StatusBar barStyle='light-content'/>
            <View style={styles.halfContainer} >
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color='white' />
                <Text style={styles.temp} >
                    {temp}°
                </Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContaner }} >
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    title: {
        fontSize: 48,
        color: 'white',
        fontWeight: '300',
    },
    subtitle: {
        marginTop: 10,
        fontSize: 22,
        color: 'white',
        fontWeight: '600',
    },
    textContaner: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    }

});

export default Weather;