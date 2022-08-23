import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Login from './component/Login';
import Weather from './component/WeatherTest';

export default function App() {
  
  return (
    <>
      {/* <Login></Login> */}
      <Weather></Weather>
    </>
    
  )
}

