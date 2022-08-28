import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Fontisto } from '@expo/vector-icons';

export default function Weather() {
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();

  const icons = {
    Thunderstorm: "lightning",
    Drizzle: "rains",
    Rain: "rain",
    Snow: "snowflake",
    Atmosphere: "cloudy-gusts",
    Clear: "day-sunny",
    Clouds: "cloudy",
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.temp}>{temp}</Text>
      <Text style={styles.weather}>{weather}</Text>
      <Fontisto
        name={icons[weather]}
        size={70}
        color="black"
        style={{ marginRight: "4%" }}
      />
    </SafeAreaView>
  );
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
    fontWeight: "800",
  },
  weather: {
    fontSize: 70,
  },
});
