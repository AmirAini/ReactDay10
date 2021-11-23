import React from "react";
import {View,Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image} from "react-native";

import {PRIMARY_COLOR, Secondary_COLOR, inputStyle, loginContainer, buttonStyle} from "../../assets/styles";
// import * as styles from "../../assets/styles";

function Login(props){
    return(
        <SafeAreaView style={loginContainer}>
            <Image 
                source={require('../../assets/logo.jpg')}
                style={{ width: 200, height:120, marginBottom:10, borderRadius: 10 }}
            />
            <Text style={{ color: PRIMARY_COLOR, fontSize:30, margin:10}}> Welcome Back User </Text>
            <Text style={{ color: PRIMARY_COLOR, fontSize:30}}>LOGIN</Text>
            <TextInput placeholder="Username" keyboardType="default" style={inputStyle}/>
            <TextInput placeholder="Number" keyboardType="number-pad" style={inputStyle} />
            <TextInput placeholder="Password" keyboardType="default" secureTextEntry={true} style={inputStyle}/>
            
            {/* <TouchableOpacity style={buttonStyle} onPress={()=>props.navigation.navigate("Home")}>
                <Text>Log In</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={buttonStyle} onPress={()=>props.navigation.navigate("TabNav")}>
                <Text>Login</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

export default Login;