import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>Please don't make an error....</Text>
      <View style={styles.subView}>
        <Text>First subView</Text>
      </View>

      <View style={styles.subView}>
        <Text>Second subView</Text>
      </View>

      <StatusBar style="auto" />
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