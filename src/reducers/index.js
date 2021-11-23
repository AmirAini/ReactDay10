import { combineReducers } from "redux";
import countReducer from "./countReducer";
import fetchMovieReducer  from "./fetchMovieReducer";
import fetchMovieDetails from "./fetchMovieDetails";

export default combineReducers({
    countVal: countReducer, //store (take from here)
    movie: fetchMovieReducer,
    movieDetails: fetchMovieDetails,
});