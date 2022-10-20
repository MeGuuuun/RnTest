import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

{/*map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다. */}
const NumList = (props) => (
    props.num.map((item,idx) => (
        <TouchableOpacity style = {styles.numList} key = {idx} onPress={()=>props.delete(idx)}>
            <Text>{item}</Text>
        </TouchableOpacity>
    ))
)

const styles = StyleSheet.create({
    numList : {
        backgroundColor:'green',
        padding:5,
        alignItems:'center',
        width:'100%',
    }
})

export default NumList;
