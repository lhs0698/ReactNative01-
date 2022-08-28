import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Fontisto } from '@expo/vector-icons';

export default function Weather() {
  const [temp, setTemp] = useState();
  const [weather, setWeather] =  useState();
  
  const icons = {
    "Thunderstorm": "lightning",
    "Drizzle": "rains",
    "Rain": "rain",
    "Snow" : "snowflake",
    "Atmosphere": "cloudy-gusts",
    "Clear" : "day-sunny",
    "Clouds": "cloudy",
  };

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&APPID=c589715e003eecd5a01a5884809d0bf8&units=metric"
    )
      .then((res) => res.json())
      .then((data) => {
        const temp = data.main.temp;
        const temps = temp.toFixed([1]); // toFixed는 소수점 반올림 시 사용한다.
        const weather = data.weather[0].main
        setTemp(temps); //온도
        setWeather(weather); //날씨 
      });
  });
  // fetch 사용, 날씨 api 적용시키기
  // openWeather api 사용 시 API KEY 부분 뒤에 &units=metric를 붙이면 섭씨 온도로 변환한다. &units=imperial => 화씨 온도 적용 시 사용한다.

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.temp}>{temp}</Text>
        <Text style={styles.weather}>{weather}</Text>
        <Fontisto name={icons[weather]} size={70} color="black" style={{marginRight: "4%"}}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 80,
    fontWeight: '800'
  },
  weather: {
    fontSize: 70
  }
});
