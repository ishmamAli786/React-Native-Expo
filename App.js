import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator,ImageBackground,FlatList, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import About from './src/screens/About';
import Navigation from './src/config/Navigation';
export default function App() {
  // const [state, setState] = useState("ishmam");
  // const [email, setEmail] = useState("ishmamalikhan@gmail.com");
  // const DATA = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     title: "First Item",
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     title: "Second Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "Third Item",
  //   },
  // ];
  return (
    <Navigation/>
  )
    // <ScrollView>
    // <View style={styles.container}>
      {/* <ImageBackground style={{width: "100%",height: "100%"}} source={{uri: "data:image/jpeg;base64,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"}}>
        <Text style={{color: "#fff",fontSize: 44, marginTop:100 }}>Hello World</Text>
        <ActivityIndicator size="large" color="#fff"/>
      </ImageBackground> */}
      {/* <View style={styles.main1}>
        <Text style={styles.text}>Header</Text>
      </View>
      <View style={styles.main2}>
        <View style={styles.boxes}>
          <View style={styles.item}>
            <Text>Item 1</Text>
          </View>
          <View style={styles.item}>
          <Text>Item 2</Text>
          </View>
          <View style={styles.item}>
          <Text>Item 3</Text>
          </View>
          <View style={styles.item}>
          <Text>Item 4</Text>
          </View>
          <View style={styles.item}>
          <Text>Item 5</Text>
          </View>
          <View style={styles.item}>
          <Text>Item 6</Text>
          </View>
        </View> */}
      {/* </View>
      <View style={styles.main3}>
      <Text style={styles.text}>Footer</Text> */}
      {/* </View> */}
      {/* <Text style={{ fontSize: 42, color: 'red', fontWeight: 'bold' }}>Hello World From Ishmam Ali Khan!</Text>
      <Text>{state}</Text>
      <Text>{email}</Text> */}
      {/* <Image style={{width:400,height:400,resizeMode: 'contain'}} source={require('./assets/image.jpg')} ></Image>
      <StatusBar style="auto" /> */}
      {/* <TextInput secureTextEntry={true} keyboardType={"default"} style={{ height: 40, borderColor: 'gray', borderEndWidth: 1, width: "80%", backgroundColor: "black", color: "white" }} placeholder="Enter Value" /> */}
      {/* <Button style={styles.btn} title={"Click Me"} onPress={()=> alert("Hello")}/> */}
      {/* <TouchableOpacity onPress={()=>alert("Button Clicked")}activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.btnText}>Click Me</Text>
      </TouchableOpacity> */}
      {/* { [1,2,3,4,5,6,7,8,9,10].map((v,i)=>{
        return(
          <View style={styles.card}>
        <Text style={{fontSize: 32}}>Ishmam Ali Khan</Text>
      </View>
        )
      })
      } */}

      {/* <FlatList
        data={DATA}
        renderItem={(data) => {
          return (
            <View style={styles.card}>
              <Text style={{ fontSize: 32 }}>{data.item.title}</Text>
            </View>
          )
        }}
        keyExtractor={item => item.id} */}
        {/* /> */}
    // </View>
    // {/* </ScrollView> */}
  // );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 100
  },
  // card: {
  //   backgroundColor: "#fff",
  //   width: "80%",
  //   height: 200,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 9,
  //   },
  //   shadowOpacity: 0.48,
  //   shadowRadius: 11.95,

  //   elevation: 18,
  // }
  // main1:{
  //   backgroundColor: "#0000FF",
  //   width: "100%",
  //   flex: 1
  // },
  // main2:{
  //   backgroundColor: "#00FF00",
  //   width: "100%",
  //   flex: 8
  // },
  // main3:{
  //   backgroundColor: "#FFA500",
  //   width: "100%",
  //   flex: 1
  // },
  // text:{
  //   fontSize: 30,
  //   color: "#fff",
  // },
  // boxes:{
  //   flex:1,
  //   marginTop: 10,
  //   flexDirection: 'row',
  //   justifyContent: "space-around",
  //   flexWrap: 'wrap',
  //   alignContent: 'center'
  // },
  // item:{
  //   backgroundColor: "#fff",
  //   width:100,
  //   height:100,
  //   marginBottom: 30
  // }
  // btn:{
  //   backgroundColor:"purple",
  //   width:"80%",
  //   height:40,
  //   justifyContent:'center',
  //   alignItems:'center'
  // },
  // btnText:{
  //   color:'white',
  //   fontSize: 20,
  // }
});
