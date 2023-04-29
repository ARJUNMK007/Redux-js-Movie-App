import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../../Images/user.png';
import './Header.scss'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/MovieSlice';

const Header = () => {
    const dispatch=useDispatch();
    const [Term, setTerm] = useState("");
    const submitHandler=(e)=>{
        e.preventDefault();
        if(Term ==="") return alert("please enter a movie")
        dispatch(fetchAsyncMovies(Term));
        dispatch(fetchAsyncShows(Term))
        setTerm("");
    }
    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/'>MOVIE APP</Link>
            </div>
           <div className='search-bar'>
            <form onSubmit={submitHandler}>
                <input  value={null} placeholder='search-movie or show' onChange={(e)=>setTerm(e.target.value)} />
                <button><i className='fa fa-search'></i></button>
            </form>
            </div> 
            <div className='user-image'>
            <img src={user} alt='user'/>
           </div>
        </div>
    );
};

export default Header;