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