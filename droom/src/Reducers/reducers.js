import {
    FETCH_USER_DATA_START,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    ADD_EDIT_START,
    ADD_EDIT_SUCCESS,
    ADD_EDIT_FAILURE,
    REMOVE_LISTING,
    FETCH_USER_UPDATED_DATA_START,
    FETCH_USER_UPDATED_DATA_SUCCESS,

  } from '../Actions/actions.js';

const initialState = {
    data: [],
    // updateData: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_DATA_START :
            return {
                ...state,
                isFetching: !state.isFetching,
                error:''
            }
        case FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                isFetching: true,
                data: action.payload
            }
        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case FETCH_USER_UPDATED_DATA_START :
            return {
                ...state,
                isFetching: !state.isFetching,
                error:''
            }
        case FETCH_USER_UPDATED_DATA_SUCCESS:
            return {
                ...state,
                isFetching: true,
                data: action.payload
                // updateData: action.payload
            }
        case ADD_USER_START:
            return{
                ...state,
                isFetching: !state.isFetching,
                error:''
            }
        case ADD_USER_SUCCESS:
            return{
                ...state,
                data: [...state.data, action.payload],
                error: ''
            }
        case ADD_USER_FAILURE:
            return{
                ...state,
                error: action.payload
            }

        case ADD_EDIT_START:
            return {
                ...state,
                isFetching: !state.isFetching,
                error: ''
            }
        case ADD_EDIT_SUCCESS:
            return {
                 ...state,
                data: [...state.data],
                error: ''
            }
        case ADD_EDIT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_LISTING:
            return {
                ...state,
                data: [...state.data],
                error: ''
            }
        
        default:
            return state;
    }
}