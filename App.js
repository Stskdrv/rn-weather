import { Component } from 'react';
import * as Location from 'expo-location';
import Loading from './Loading';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '_';

const getApiUrl = (latitude, longitude) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

export default class extends Component {

  state = {
    isLoading: true,
    temp: null,
  }

  getLocation = async () => {
    try { 
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      
      await this.getWeather(latitude, longitude);
    }
    catch (e) {
      Alert.alert('We run into an error', `Error: ${e}`)
      console.log(e); 
    }
  }

  getWeather = async (latitude, longitude) => {
    const url = getApiUrl(latitude, longitude);
    const { data: { main: { temp }, weather } } = await axios.get(url);

    this.setState({
      isLoading: false,
      temp: Math.round(temp),
      condition: weather[0].main,
    });
  } 

  componentDidMount() {
    this.getLocation(); 
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={temp} condition={condition} />
    );
  }

}

