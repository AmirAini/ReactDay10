import React from "react";
import {View,Text,FlatList, TextInput, Button, TouchableOpacity, SafeAreaView, Image, ScrollView, Dimensions} from "react-native";
import {PRIMARY_COLOR, Secondary_COLOR, inputStyle} from "../../assets/styles";
import Details from "../detail";

const ABOUTDATA = [
    {
        id:0,
        title: 'Title 1',
        content: 'This is content for section 1',
    },
    {
        id:1,
        title: 'Title 2',
        content: 'This is content for section 2',
    },
    {
        id:2,
        title: 'Title 3',
        content: 'This is content for section 3',
    },
    {
        id:3,
        title: 'Title 4',
        content: 'This is content for section 4',
    },
]

function About(props){
    
    //empty array view
    function _renderEmptyView(){
        return(
            <Text>No data found.</Text>
        )
    }

    //show array props 
    function _renderView(item){
        return(
            <View key={item.id} style={{ flex:1 }}>
                <Text>{item.title}</Text>
                <Text>{item.content}</Text>
            </View>
        )
    }

    return(
        <View>
            <Text>This is About</Text>
            <FlatList
                data={ABOUTDATA}
                renderItem={({item}) => (
                    // <View key={item.id} style={{ flex:1 }}>
                    //     <Text>{item.title}</Text>
                    // </View>
                    _renderView(item)
                )}
                keyExtractor={(item) => item.id} 
                
                //? if empty array, usually from APIs (like emails or notifications)
                ListEmptyComponent={()=>(
                    // <Text>No data found.</Text>
                    _renderEmptyView()
                )}
                />
        </View>
            
        
    )
}

export default About;