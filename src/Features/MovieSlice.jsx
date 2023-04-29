import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from '../Components/API/MovieApi'
import { APIKey } from '../Components/API/MovieApiKey';



 export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async(Term)=>{
    const movieText="batman"
    const response= await MovieApi.get(`/?apikey=${APIKey}&s=${Term}&type=movie`)
   return response.data;

 });

 export const fetchAsyncShows=createAsyncThunk('movies/fetchAsynShows',async(Term)=>{
    const showText="friends";
    const response= await MovieApi.get(`/?apikey=${APIKey}&s=${Term}&type=series`);
    return response.data;
    
 });

 export const fetchAsyncMovieOrShowDetails=createAsyncThunk('movies/fetchAsyncMovieOrShowDetails',async(imdbID)=>{
    // const id="tt4853102";
    const response=await MovieApi.get(`/?apikey=${APIKey}&i=${imdbID}&Plot=full`);
    return response.data;
 })


const initialState={
    movies:{},
    shows:{},
    movieOrShowDetails:{},
}
const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        
        removeSelectedMovieOrShow :(state)=>{
            state.selectMovieOrShow={};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fetched succesfully");
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
             console.log("fetched successfuly");
             return{...state,shows:payload}
        },
        [fetchAsyncMovieOrShowDetails.fulfilled]:(state,{payload})=>{
            console.log("fetched successfully")
            return {...state,movieOrShowDetails:payload}
            
        }
    }
});

export const {removeSelectedMovieOrShow}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getMovieOrShowDetails=(state)=>state.movies.movieOrShowDetails;
export default movieSlice.reducer;