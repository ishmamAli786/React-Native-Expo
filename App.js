import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [state, setState] = useState("ishmam");
  const [email, setEmail] = useState("ishmamalikhan@gmail.com");
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  return (
    // <ScrollView>
    <View style={styles.container}>
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

      <FlatList
        data={DATA}
        renderItem={(data) => {
          return (
            <View style={styles.card}>
              <Text style={{ fontSize: 32 }}>{data.item.title}</Text>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
    // {/* </ScrollView> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },
  card: {
    backgroundColor: "#fff",
    width: "80%",
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  }
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
