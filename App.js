import { Component } from 'react';
import * as Location from 'expo-location';
import Loading from './Loading';
import { Alert } from 'react-native';
import axios from 'axios';


const API_KEY = "_";

const getApiUrl = (latitude, longitude) => `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`;

export default class extends Component {

  state = {
    isLoading: true,
  }

  getLocation = async () => {
    try { 
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    }
    catch (e) {
      Alert.alert('Cannot get location data', 'Please try again')
      console.log(e);
    }
    // return currentLocation;
  }

  getWeather = async (latitude, longitude) => {
    const url = getApiUrl(latitude, longitude);
    const { data } = await axios.get(url);
    console.log(data);
  } 

  componentDidMount() {
    this.getLocation(); 
  }
  render() {
    const { isLoading } = this.state;
    return (
      isLoading ?
        <Loading /> :
        null
    );
  }

}

