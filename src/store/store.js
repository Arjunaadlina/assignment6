import axios from 'axios';
import { createStore } from 'redux';

const initialState = {
    movies: [],
    loading: false,
    error: null,
};

export const fetchMoviesRequest = () => ({ type: 'FETCH_MOVIES_REQUEST' });
export const fetchMoviesSuccess = (movies) => ({ type: 'FETCH_MOVIES_SUCCESS', payload: movies });
export const fetchMoviesFailure = (error) => ({ type: 'FETCH_MOVIES_FAILURE', error });

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_MOVIES_SUCCESS':
            console.log(action.payload);
            return { ...state, loading: false, movies: action.payload };
        case 'FETCH_MOVIES_FAILURE':
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export const fetchMovies = (query) => async (dispatch) => {
    dispatch(fetchMoviesRequest());
    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=6dee284c&s=${query}`);
        dispatch(fetchMoviesSuccess(response.data.Search || []));
    } catch (error) {
        dispatch(fetchMoviesFailure(error.message));
    }
};

const store = createStore(movieReducer);

export default store;