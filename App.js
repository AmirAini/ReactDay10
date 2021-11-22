import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/containers/login";
import Register from './src/containers/register';
import Home from './src/containers/home';
import Details from './src/containers/detail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>

        {/* LOGIN */}
        <Stack.Screen name="Login" component={Login} options=
        {{
          headerStyle:{
            backgroundColor: 'yellow',
          },
          headerShown: false,
      }}
        />

        {/* Register */}
        <Stack.Screen name="Register" component={Register} options=
        {{
          headerBackVisible: false,
      }}/>

      {/* Home */}
      <Stack.Screen name="Home" component={Home}/> 

      {/* Details */}
      <Stack.Screen name="Details" component={Details} options={{
        headerStyle:{
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
        }
        }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
