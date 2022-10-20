import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


const PickerComponent = () => {
    const [country, setCountry] = useState("")
    const [value, setValue] = useState("")

    return (
        <View style = {styles.container}>
            <Picker 
                style = {{height:50, width:200}}
                selectedValue = {country}
                onValueChange={(val, idx)=>setCountry(val)}
            >
                <Picker.Item label = "korea" value = "KOREA"></Picker.Item>
                <Picker.Item label = "usa" value = "USA"></Picker.Item>
            </Picker>
            <Slider 
                style = {{heught:40, width:300}}
                value = {value}
                minimumValue = {0}
                maximumValue = {100}
                onValueChange = {(val)=>{setValue(val)}}
                maximumTrackTintColor="red"
                minimumTrackTintColor='blue'
                step = {0}
            ></Slider>
            <Text style = {styles.text}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        paddingTop: 20,
        marginBottom: 10,
        alignItems:'center'
    },
    text : {
        marginTop:20,
        fontSize:25
    }
})

export default PickerComponent;