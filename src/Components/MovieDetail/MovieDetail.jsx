import React, { useEffect } from 'react';
import { fetchAsyncMovieOrShowDetails, getMovieOrShowDetails } from '../../Features/MovieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./MovieDetail.scss"
import { removeSelectedMovieOrShow } from '../../Features/MovieSlice';

const MovieDetail = () => {
    const {imdbID}=useParams();
    const data=useSelector(getMovieOrShowDetails);
    console.log(data);
   
    const dispatch=useDispatch();
    useEffect(() => {
        if(imdbID){
            dispatch(fetchAsyncMovieOrShowDetails(imdbID))
        }
        return ()=>{
            dispatch(removeSelectedMovieOrShow())
        };
        
    }, [dispatch,imdbID])
    
   
    return (
        <div className='movie-section'>
            <div className='section-left'>
               <div className='movie-title'><h2>{data.Title}</h2></div>
               <div className='movie-properties'>
                <div className='movie-props'>
                <span>IMDB Rating <i className='fa fa-star' style={{color:'#fae500'}}></i>:{data.imdbRating}</span>
                <span>  IMDB Votes <i class="fa fa-thumbs-up" style={{color:"#ffff"}}></i>:{data.imdbVotes} </span>
                <span>  Run Time <i class="fa fa-film" style={{color:"#ffff"}}></i>:{data.Runtime} </span>
                <span>  Released <i class="fa fa-calendar" style={{color:"#ffff"}}></i>:{data.Released} </span>
                </div>
                <div className='movie-desc'>
                    
                    <p>{data.Plot}</p>
                    <div className='movie-info'>
                     <div className='left-info'>
                    <span>Director</span>
                    <span> Actors</span>
                     <span> Language</span> 
                     <span> Awards</span>
                     <span>Genre</span>
                     </div>
                     <div className='right-info'>
                     <span>{data.Director}</span>
                    <span> {data.Actors}</span>
                     <span> {data.Language}</span> 
                     <span>{data.Awards}</span>
                     <span>{data.Genre}</span>
                     </div>
                     </div>
                </div>
               </div>
            </div>
            <div className='section-right'>
                <div className='movie-img'>
                    <img src={data.Poster}/>
                </div>       
            </div>
        </div>
    );
};

export default MovieDetail;