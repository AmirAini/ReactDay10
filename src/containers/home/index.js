import React from "react";
import {View,Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image, ScrollView, Dimensions} from "react-native";
import {PRIMARY_COLOR, Secondary_COLOR, inputStyle} from "../../assets/styles";
import Details from "../detail";

const DATA = [
    {
        title: 'Movie1',
        poster: require("../../assets/movie1.jpg") , 
        Genre: 'Action',
    },
    {
        title: 'Movie2',
        poster: require("../../assets/movie2.jpg") , 
        Genre: 'Action',
    },
    {
        title: 'Movie3',
        poster: require("../../assets/movie3.jpg") , 
        Genre: 'Action',
    },
    {
        title: 'Movie4',
        poster: require("../../assets/movie4.jpg") , 
        Genre: 'Action',
    },
    {
        title: 'Movie5',
        poster: require("../../assets/movie5.jpg") , 
        Genre: 'Action',
    },
    {
        title: 'Movie6',
        poster: require("../../assets/movie6.jpg") , 
        Genre: 'Action',
    },
    {
        title: 'Movie7',
        poster: require("../../assets/movie7.jpg") , 
        Genre: 'Action',
    },
    {
        title: 'Movie8',
        poster: require("../../assets/movie8.jpg") , 
        Genre: 'Action',
    },
]

function Home (props) {
    return(
        <SafeAreaView style={{ flex:1}}>
            <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{paddingHorizontal: 20, flexWrap: 'wrap', flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{ marginLeft: 40, fontSize:20, marginBottom:10, marginTop:10 }}>Pick from the Movies Below</Text>

                {DATA.map((list)=>(
                    <TouchableOpacity onPress={()=>props.navigation.navigate("Details", list)}>
                    <View style={styles.cardStyle}>
                        <Text>{list.title}</Text>
                        <Image source={list.poster} style={{width: 100, height:130, borderRadius:10}} />
                        <Text>{list.Genre}</Text>
                    </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
        
    )
}



const styles = {
    cardStyle: {
        width:150,
        height:180,
        borderRadius:10,
        marginVertical:10,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'skyblue',
    }
}

export default Home;