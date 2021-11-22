import React from "react";
import { View,Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image } from "react-native";
import {PRIMARY_COLOR, Secondary_COLOR, inputStyle, buttonStyle, loginContainer} from "../../assets/styles";



function Register (props){
    return (
        <SafeAreaView  style={loginContainer}>
            <Image source={require('../../assets/register.jpg')} style={{ width: 200, height:120, marginBottom:10, borderRadius: 10}} />
            <Text style={{ fontSize:20, margin:10 }}>This is Register Pagse</Text>
            <TextInput placeholder='Username' keyboardType='default' style={inputStyle} />
            <TextInput placeholder='Number' keyboardType='number-pad' style={inputStyle}/>
            <TextInput placeholder='Password' keyboardType='default' secureTextEntry={true} style={inputStyle}/>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Login')} style={buttonStyle}>
                <Text>Submit Registration</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Register;