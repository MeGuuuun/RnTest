import {View, Text, StyleSheet} from 'react-native'

const Header = () => (
    <View style = {styles.header}>
        <Text style = {styles.mainText}>This is Header</Text>
    </View>
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