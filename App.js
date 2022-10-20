import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Button, TextInput } from 'react-native';
import {useState} from "react";


import Header from './Components/Header'
import Generator from './Components/Generator';
import NumList from './Components/NumList';
import Picker from './Components/Picker';

export default function App() {
  const [appName, setAppName] = useState("First App")
  const [random, setRandom] = useState([30, 999])

  {/* 랜덤 숫자를 생성하는 메소드
  Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
  Math.random() 함수는 0 이상 1 미만의 구간에서 근사적으로 균일한 부동소숫점 의사난수를 반환
 */}
  const onAddRandomNum = () => {
    const newNum = Math.floor(Math.random()*100)+1;
    setRandom([...random, newNum])
  }

  {/* position = NumList로 받아온 값 
  filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.*/}
  const onNumDelete = (position) => {
    const newArray = random.filter((num, index)=>{
      return position != index;
    })
    setRandom(newArray)
  }

  return (
    <View style={styles.mainView}>
      <Picker></Picker>
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