import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const Generator = (props) => (
    <View>
        <Button style ={styles.generator} title = "Add Number" onPress = {()=>props.add()} />
    </View>
)

const styles = StyleSheet.create({
    generator : {
        backgroundColor :'green',
        padding:5,
        alignItems:'center',
        width:'100%'
    },
})

export default Generator;

{/* 랜덤 숫자를 추가할 수 있는 기능이 들어간 버튼 생성 = Generator
버튼이 눌렸을 때 parent에서 받아온 props의 add 함수 실행 */}