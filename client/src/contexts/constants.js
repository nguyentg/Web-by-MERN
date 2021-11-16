export const apiUrl = 
    process.env.NODE_ENV !== 'production' 
    ? 'http://localhost:5000/api' 
    : 'somedeployedURL'

export const LOCAL_STORAGE_TOKEN_NAME = 'learnit-mern'

export const POSTS_LOADED_SUCCESS = 'POSTS_LOADED_SUCCESS'
export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const FIND_POST = 'FIND_POST'


export const MOVIES_LOADED_SUCCESS = 'MOVIES_LOADED_SUCCESS'
export const MOVIES_LOADED_FAIL = 'MOVIES_LOADED_FAIL'
export const ADD_MOVIE = 'ADD_MOVIE'
export const DELETE_MOVIE = 'DELETE_MOVIE'
export const UPDATE_MOVIE = 'UPDATE_MOVIE'
export const FIND_MOVIE = 'FIND_MOVIE'	
//xong