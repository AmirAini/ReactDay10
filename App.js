import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import {store,persistor} from './src/store/configureStore';
import { Provider } from 'react-redux';

import Login from "./src/containers/login";
import Register from './src/containers/register';
import Home from './src/containers/home';
import Details from './src/containers/detail';
import About from './src/containers/about';
import Contacts from './src/containers/contacts';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav(){
  return(
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon: ({focused, color, size})=> {
        let iconName;
        if (route.name === 'Home'){
          iconName = focused 
          ? 'home-sharp' : 'home-outline' ;

        } else if (route.name ==='About'){
          iconName = focused 
          ? 'people-sharp' : 'md-people-outline' ;

        } else if (route.name === "Contacts"){
          iconName = focused 
          ? 'phone-portrait-sharp' : "phone-portrait-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor:"black",
      tabBarInactiveTintColor:"lightgray"
    }
    )}>

      <Tab.Screen name="Home" component={Home} options={{
        // tabBarIcon: ()=>(
        //   <Ionicons name="md-home-outline" size={24} color="black" />) 
      }}/>

      <Tab.Screen name="About" component={About} options={{
        // tabBarIcon: ()=>(
        // <Ionicons name="phone-portrait-outline" size={24} color="black" />)
      }}/>

      <Tab.Screen name="Contacts" component={Contacts} options={{
        // tabBarIcon: ()=>(
        //   <Ionicons name="people-outline" size={24} color="black" />
        // )
      }}/>

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store} persistor={persistor}>
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
        {/* <Stack.Screen name="Home" component={Home}/>  */}
        <Stack.Screen name="TabNav" component={TabNav} options=
          {{
            headerShown: false,
        }}/> 

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
    </Provider>
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
