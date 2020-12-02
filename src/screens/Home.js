import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button  } from 'react-native';
import * as Location from 'expo-location';


export default function Home(props){
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);


    return (
        <View style={styles.container}>
            <Text style={{fontSize: 32}}>Home</Text>
            <Button onPress={()=>props.navigation.navigate("Map")}title="Open Map" />
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent:"center",

    }
})