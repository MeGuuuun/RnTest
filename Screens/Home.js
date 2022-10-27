import { Text, View, StyleSheet, Button } from 'react-native';

const Home = (props) => {
    return (
        <View style = {{
            flex:1,
            alignItems:'center',
            justifyContent:'center'}}>
            <Text>Home Screen</Text>
            <Button
                title = 'To User Screen'
                onPress={()=>{
                    props.navigation.navigate("User",
                    {
                        userIdx:100,
                        userName:"Terry",
                        userAge:24
                    })
                }} />
        </View>
    );
}

export default Home;