import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react";

import Header from './Components/Header'
import Generator from './Components/Generator';
import NumList from './Components/NumList';


export default function App() {
  const [appName, setAppName] = useState("First App")
  const [random, setRandom] = useState([30, 999])
  
  const onAddRandomNum = () => {
    const newNum = Math.floor(Math.random()*100)+1;
    setRandom([...random, newNum])
  }
  const onNumDelete = (position) => {
    const newArray = random.filter((num, index)=>{
      return position != index;
    })
    setRandom(newArray)
  }

  return (
    <View style={styles.mainView}>
      <Header name = {appName} />
      <Generator add = {onAddRandomNum}></Generator>
      <NumList num = {random} delete = {onNumDelete}></NumList>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView:{
    backgroundColor:'white',
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