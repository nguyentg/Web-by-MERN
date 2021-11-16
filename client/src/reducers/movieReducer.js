import {
	MOVIES_LOADED_SUCCESS,
	MOVIES_LOADED_FAIL,
	ADD_MOVIE,
	DELETE_MOVIE,
	UPDATE_MOVIE,
	FIND_MOVIE
} from '../contexts/constants'

export const movieReducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case MOVIES_LOADED_SUCCESS:
			return {
				...state,
				movies: payload,
				moviesLoading: false
			}

		case MOVIES_LOADED_FAIL:
			return {
				...state,
				movies: [],
				moviesLoading: false
			}

		case ADD_MOVIE:
			return {
				...state,
				movies: [...state.movies, payload]
			}

		case DELETE_MOVIE:
			return {
				...state,
				movies: state.movies.filter(movies => movies._id !== payload)
			}

		case FIND_MOVIE:
			return { ...state, movies: payload }

		case UPDATE_MOVIE:
			const newMovies = state.movies.map(movie =>
				movie._id === payload._id ? payload : movie
			)

			return {
				...state,
				movies: newMovies
			}

		default:
			return state
	}
}