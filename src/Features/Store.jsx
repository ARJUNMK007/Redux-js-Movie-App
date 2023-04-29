import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from './MovieSlice'

export const store=configureStore({
    reducer:{
        movies:moviesReducer},
})