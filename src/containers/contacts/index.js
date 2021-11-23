import React from "react";
import {View,Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image, ScrollView, Dimensions} from "react-native";
import {PRIMARY_COLOR, Secondary_COLOR, inputStyle} from "../../assets/styles";
import Details from "../detail";
import {useDispatch, useSelector} from 'react-redux';
import {increase, decrease} from '../../actions';

//!React Hook

function Contacts(props){
    const count = useSelector((state)=>state.countVal); //mapStatetoProps
    const dispatch = useDispatch(); //mapDispatchToProps
    return(
        <View>
            <Text>This is Contact</Text>

            <Text style={{ textAlign:'center' }}>Count:{count}</Text>
            <Button title="increase" onPress={()=> dispatch(increase())}/>
            <Button title="decrease" onPress={()=> dispatch(decrease())}/>
        </View>
    )
}

export default Contacts;