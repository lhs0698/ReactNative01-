import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.idInput} autoCapitalize = 'none'  placeholder='ID'/>
      <TextInput style={styles.pwInput} autoCapitalize = 'none' secureTextEntry={true} placeholder='PASSWORD'/> 
      <TouchableOpacity style={styles.loginButton}><Text style={styles.loginText}>로그인</Text></TouchableOpacity>
      <TouchableOpacity style={styles.newUser}><Text style={styles.loginText}>회원가입</Text></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  idInput:{
    width: 180,
    height: 50,
    borderColor : "gray",
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 300,
    textAlign: "center"
  },
  pwInput:{
    width: 180,
    height: 50,
    borderColor : "gray",
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 10,
    textAlign: "center"
  },
  mainImg:{
    width: 300,
    height: 300,
    margin: "auto"
  },
  loginButton: {
    width: 180,
    height: 50,
    backgroundColor: '#01d0fa',
    borderRadius: 30,
    justifyContent:"center",
    marginTop: 30,
  },
  newUser:{
    width: 180,
    height: 50,
    backgroundColor: '#01d0fa',
    borderRadius: 30,
    justifyContent:"center",
    marginTop: 10
  },
  loginText: {
    color: 'black',
    textAlign: "center",
  }
});
