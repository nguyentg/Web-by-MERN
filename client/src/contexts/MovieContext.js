import { createContext, useReducer, useState } from "react";
import { movieReducer } from '../reducers/movieReducer'
import { apiUrl, 
    MOVIES_LOADED_FAIL, 
    MOVIES_LOADED_SUCCESS,
	ADD_MOVIE,
	DELETE_MOVIE,
	UPDATE_MOVIE,
	FIND_MOVIE	} from "./constants";
import axios from "axios";

export const MovieContext = createContext()

const MovieContextProvider = ({ children }) => {
	// State
	const [movieState, dispatch] = useReducer(movieReducer, {
		movie: null,
		movies: [],
		moviesLoading: true
	})

	const [showAddMovieModal, setShowAddMovieModal] = useState(false)
	const [showUpdateMovieModal, setShowUpdateMovieModal] = useState(false)
	const [showToast, setShowToast] = useState({
		show: false,
		message: '',
		type: null
	})

	// Get all movies
	const getMovies = async () => {
		try {
			const response = await axios.get(`${apiUrl}/movies`)
			if (response.data.success) {
				dispatch({ type: MOVIES_LOADED_SUCCESS, payload: response.data.movies })
			}
		} catch (error) {
			dispatch({ type: MOVIES_LOADED_FAIL })
		}
	}

	// Add post
	const addMovie = async newMovie => {
		try {
			const response = await axios.post(`${apiUrl}/movies`, newMovie)
			if (response.data.success) {
				dispatch({ type: ADD_MOVIE, payload: response.data.movie })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

	// Delete post
	const deleteMovie = async movieId => {
		try {
			const response = await axios.delete(`${apiUrl}/movies/${movieId}`)
			if (response.data.success)
				dispatch({ type: DELETE_MOVIE, payload: movieId })
		} catch (error) {
			console.log(error)
		}
	}

	// Find post when user is updating post
	const findMovie = movieId => {
		const movie = movieState.movies.find(movie => movie._id === movieId)
		dispatch({ type: FIND_MOVIE, payload: movie })
	}

	// Update post
	const updateMovie = async updatedMovie => {
		try {
			const response = await axios.put(
				`${apiUrl}/movies/${updatedMovie._id}`,
				updatedMovie
			)
			if (response.data.success) {
				dispatch({ type: UPDATE_MOVIE, payload: response.data.movie })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

	// Post context data
	const movieContextData = {
		movieState,
		getMovies,
		addMovie,
		showAddMovieModal,
		setShowAddMovieModal,
		showToast,
		setShowToast,
        showUpdateMovieModal,
		setShowUpdateMovieModal,
		deleteMovie,
		findMovie,
		updateMovie
    }
	
	return (
		<MovieContext.Provider value={movieContextData}>
			{children}
		</MovieContext.Provider>
	)
}

export default MovieContextProvider