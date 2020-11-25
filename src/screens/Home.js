import React from 'react';
import { StyleSheet, Text, View,Button  } from 'react-native';



export default function Home(props){
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 32}}>Home</Text>
            <Button onPress={()=>props.navigation.navigate("About",{name:"Ishmam ALi"})}title="Go To About" />
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