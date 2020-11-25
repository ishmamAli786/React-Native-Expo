import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';



export default function About(route){
    const {name}=route.params;
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 32}}>{name}</Text>
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