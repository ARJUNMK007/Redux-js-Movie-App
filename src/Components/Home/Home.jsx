import React, { useEffect, useState } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import {  fetchAsyncMovies, fetchAsyncShows } from '../../Features/MovieSlice';

const Home = () => {
    const dispatch=useDispatch();
    // const [movieText, setMovieText] = useState("")
    const Term="Crime";
    const Terms="Friends"
    useEffect(() => {
        dispatch(fetchAsyncMovies(Term))
        dispatch(fetchAsyncShows(Terms))
        
    },[dispatch] )
    return (
        <div>
            <div className='banner-img'></div>
            {/* <input className='input' placeholder='search movie' width={100}
             height={40} onChange={(e)=>setMovieText(e.target.value)}/> */}
            <MovieListing/>
        </div>
    );
};

export default Home;