import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useState } from 'react';

const Header = (props) => (
    <TouchableOpacity style= {styles.header} onPress={()=> alert('hello')}>
        <View style = {styles.header}>
            <Text style = {styles.mainText}>{props.name}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    header : {
        backgroundColor:'pink',
        padding:5,
        alignItems:'center',
        width:'100%',
        justifyContent:'center'
    },

    mainText : {
        fontSize:30,
        color:'red'
    }
})
export default Header;