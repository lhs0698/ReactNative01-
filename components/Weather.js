import { SafeAreaView, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Fontisto } from "@expo/vector-icons";

export default function Weather() {
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();

  // Fontisto 사용, 날씨에 따른 icon 변경
  const icons = {
    Thunderstorm: "lightning",
    Drizzle: "rains",
    Rain: "rain",
    Snow: "snowflake",
    Atmosphere: "cloudy-gusts",
    Clear: "day-sunny",
    Clouds: "cloudy",
    Mist: "fog"
  };

  // ios app은 한 번 ‘허용 안 함’을 누르면 그 다음번에 앱을 실행해도 
  // permission을 구하는 창이 다시는 뜨지 않으므로 폰의 ‘설정 -> expo ->위치 -> 사용하는 동안’ 에 수동으로 체크해줘야한다
  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync(); // 앱 내에서 사용자의 위치사용에 대한 허가를 요청한다
      const locationData = await Location.getCurrentPositionAsync();
      console.log(locationData)
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&APPID=c589715e003eecd5a01a5884809d0bf8&units=metric"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const temp = data.main.temp;
        const temps = temp.toFixed([1]); // toFixed는 소수점 반올림 시 사용한다.
        const weather = data.weather[0].main;
        setTemp(temps); //온도
        setWeather(weather); //날씨
        getLocation();
      });
  },);
  // fetch 사용, 날씨 api 적용시키기
  // openWeather api 사용 시 API KEY 부분 뒤에 &units=metric를 붙이면 섭씨 온도로 변환한다. &units=imperial => 화씨 온도 적용 시 사용한다.
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.temp}>{temp}</Text>
      <Text style={styles.weather}>{weather}</Text>
      <Fontisto
        name={icons[weather]}
        size={70}
        color="black"
        style={{ marginRight: "1%" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 100,
    fontWeight: "800",
  },
  weather: {
    fontSize: 90,
    marginBottom: 10,
  },
});
