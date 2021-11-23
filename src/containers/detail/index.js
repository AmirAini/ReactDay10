import React, {useState , useEffect} from "react";
import {View,Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image, ScrollView, Dimensions} from "react-native";
import {PRIMARY_COLOR, Secondary_COLOR, inputStyle} from "../../assets/styles";


function Details (props){
    let data = props.route.params
    return (
        <SafeAreaView style={{ flex:1 }}>
            <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{paddingHorizontal: 20, flexWrap: 'wrap', flexDirection: 'column', textAlign:'center', alignItems:'center' }}>
            <Image source={data.Poster} style={{ width:190,  height:250, marginTop:30, borderRadius:10}} />
            <Text style={{ fontSize:30, marginTop:10 }}>{data.Title}</Text>
            <Text>{data.Genre}</Text>
            <Text style={{ fontSize:20 }}>Plot: </Text>
            <Text  style={{ fontSize:14, display:'flex', textJustify:'inter-word', textAlign:'justify'  }}>Lorem Ipsums is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

//Method 2
// function Details(props){
//     const [title, setTItle] = useState('');
//     const [datalist, setDatalist] = useState([])
//     useEffect(()=>{
//         setTItle(props.route.params.title);
//     },[])
// }

export default Details;