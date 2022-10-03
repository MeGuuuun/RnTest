import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header'
import {useState} from "react";

export default function App() {
  const [appName, setAppName] = useState("First App")
  return (
    <View style={styles.mainView}>
      <Header name = {appName} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView:{
    backgroundColor:'green',
    flex:1,
    marginTop:50,
    alignItems:'center',
    justifyContent:'center'
  },
  
  subView: {
    backgroundColor:'yellow',
    flex:4,
    marginBottom:10
  },

  mainText : {
    fontSize : 50,
    fontWeight: 'bold',
    color:'red',
    padding:20
  }
});

/* 
View component is the most fundamental component for building a UI
View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls
*/