// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import CameraApp from '../screens/Camera';
import ImagePickerExample from '../screens/Gallery';
import Map from '../screens/Map';
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Camera" component={CameraApp} />
        <Stack.Screen name="ImagePickerExample" component={ImagePickerExample} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;