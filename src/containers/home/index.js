import React, {useState} from "react";
import {View,Text, TextInput, Button, TouchableOpacity, FlatList, SafeAreaView, Image, ScrollView, Dimensions} from "react-native";
import {PRIMARY_COLOR, Secondary_COLOR, inputStyle} from "../../assets/styles";
import Details from "../detail";
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovie} from '../../actions';

// const DATA = [
//     {
//         title: 'Movie1',
//         poster: require("../../assets/movie1.jpg") , 
//         Genre: 'Action',
//     },
//     {
//         title: 'Movie2',
//         poster: require("../../assets/movie2.jpg") , 
//         Genre: 'Action',
//     },
//     {
//         title: 'Movie3',
//         poster: require("../../assets/movie3.jpg") , 
//         Genre: 'Action',
//     },
//     {
//         title: 'Movie4',
//         poster: require("../../assets/movie4.jpg") , 
//         Genre: 'Action',
//     },
//     {
//         title: 'Movie5',
//         poster: require("../../assets/movie5.jpg") , 
//         Genre: 'Action',
//     },
//     {
//         title: 'Movie6',
//         poster: require("../../assets/movie6.jpg") , 
//         Genre: 'Action',
//     },
//     {
//         title: 'Movie7',
//         poster: require("../../assets/movie7.jpg") , 
//         Genre: 'Action',
//     },
//     {
//         title: 'Movie8',
//         poster: require("../../assets/movie8.jpg") , 
//         Genre: 'Action',
//     },
// ]

function Home (props) {
    
    const [movieName, onChangeMovieName] = React.useState("");
    const dispatch = useDispatch(); //mapDispatchToProps
    const fetchMovieReducer = useSelector((state)=>state.movie.data.Search); //mapStatetoProps
    const DATA = fetchMovieReducer;
    
    

    function _renderEmptyView(){
        return(
            <Text>No data found.</Text>
        )
    }
    // console.log(state.movie)
    function _renderView(item){
        return(
            <View key={item.imdbID} style={styles.cardStyle}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Details", item)}>
                    <Text>{item.Title}</Text>
                    <Text>{item.Year}</Text>
                    <Image source={item.Poster} style={{width:140, height:180}} onPress={()=>navigator.navigate} />
                </TouchableOpacity>
            </View>
        )
    }

    return(

        
        <SafeAreaView style={{ flex:1}}>
            <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{paddingHorizontal: 20, flexWrap: 'wrap', flexDirection: 'row', justifyContent:'space-between'}}>
    
            <Text style={{ marginLeft: 40, fontSize:20, marginBottom:10, marginTop:10 }}>Search Movies Below</Text>
            <TextInput placeholder='Username' keyboardType='default' onChangeText={onChangeMovieName} value={movieName}/>
            <Button title='SearchResult'onPress={()=> dispatch(fetchMovie(movieName))}/>
                
            <FlatList
                data={DATA}
                renderItem={({item}) => (
                    //?show
                    _renderView(item)
                )}
                keyExtractor={(item) => item.imdbID} 
                
                //? if empty array, usually from APIs (like emails or notifications)
                ListEmptyComponent={()=>(
                    // <Text>No data found.</Text>
                    _renderEmptyView()
                )}
            />
            </ScrollView>






            
                {/* {DATA.map((list)=>(
                    <TouchableOpacity onPress={()=>props.navigation.navigate("Details", list)}>
                    <View style={styles.cardStyle}>
                        <Text>{list.title}</Text>
                        <Image source={list.poster} style={{width: 100, height:130, borderRadius:10}} />
                        <Text>{list.Genre}</Text>
                    </View>
                    </TouchableOpacity>
                ))} */}

            
        </SafeAreaView>
    )
}

const styles = {
    cardStyle: {
        width:200,
        height:230,
        borderRadius:10,
        marginVertical:10,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'skyblue',
        marginLeft:80,
    }
}


export default Home;