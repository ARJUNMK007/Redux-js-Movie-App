import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../Features/MovieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import Slider from 'react-slick'
import { settings } from '../../Constants/Setting';

const MovieListing = () => {
 
  const movies=useSelector(getAllMovies);
  const shows=useSelector(getAllShows);
  console.log(movies)
  console.log(shows);
  let renderMovies="";
  let renderShows="";

  renderShows = shows.Response ==="True" ? (shows.Search.map((show,index)=>(
   <MovieCard key={index} data={show}/>

  ))) : ( <div className='movies-error'><h3>{shows.Error}</h3></div>);

  renderMovies = movies.Response === "True" ? (movies.Search.map((movie,index)=>(
     <MovieCard key={index} data={movie}/>
  ))
  ) : (<div className='movies-error'><h3>{movies.Error}</h3></div>);
    return (
        <div className='movie-wrapper'>
          <div className='movie-list'>
             <h2>MOVIES</h2>
              <div className='movie-container'><Slider {...settings}>{renderMovies}</Slider></div>
              
           </div>
           <div className='movie-list'>
             <h2>SHOWS</h2>
              <div className='show-container'><Slider {...settings}>{renderShows}</Slider></div>
           </div>
        </div>
    );
};

export default MovieListing;