import {axiosWithAuth} from '../components/utils/axiosWithAuth'

export const FETCH_USER_DATA_START = 'FETCH_USER_DATA_START';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

export const FETCH_USER_UPDATED_DATA_START = 'FETCH_USER_UPDATED_DATA_START';
export const FETCH_USER_UPDATED_DATA_SUCCESS = 'FETCH_USER_UPDATED_DATA_SUCCESS'

export const REMOVE_LISTING = `REMOVE_LISTING`;

export const ADD_USER_START = `ADD_USER_START`;
export const ADD_USER_SUCCESS = `ADD_USER_SUCCESS`;
export const ADD_USER_FAILURE = `ADD_USER_FAILURE`;

export const ADD_EDIT_START = `ADD_EDIT_START`;
export const ADD_EDIT_SUCCESS = `ADD_EDIT_SUCCESS`;
export const ADD_EDIT_FAILURE = `ADD_EDIT_FAILURE`;

export const FETCH_MATCHED_DATA_START = `FETCH_MATCHED_DATA_START`;
export const FETCH_MATCHED_DATA_SUCCESS = `FETCH_MATCHED_DATA_SUCCESS`;



export const getData = () => {
    return dispatch => {
        dispatch({type: FETCH_USER_DATA_START});
        axiosWithAuth()
            .get(`http://localhost:5000/api/users/`)
            .then(res => {
                console.log(res)
                dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => console.log(err))
    }
}

export const getUpdate = () => {
    return dispatch => {
        dispatch({type: FETCH_USER_UPDATED_DATA_START});
        axiosWithAuth()
            .get(`http://localhost:5000/api/users/`)
            .then(res => {
                console.log('it is running over and over',res)
                dispatch({ type: FETCH_USER_UPDATED_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => console.log(err))
    }
}

export const getMatched = () => {
    return dispatch => {
        dispatch({type: FETCH_MATCHED_DATA_START});
        axiosWithAuth()
            .get(`http://localhost:5000/api/matched/`)
            .then(res => {
                console.log('it is running over and over',res)
                dispatch({ type: FETCH_MATCHED_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => console.log(err))
    }
}


export const deleteData = (removeID)  => {
    return dispatch => {
        dispatch({type: REMOVE_LISTING});
            axiosWithAuth()
                .delete(`http://localhost:5000/api/matched/${removeID}`)
                .then(res => console.log(res))
                .catch(err => console.log(err))
    }
}

export const addData = (values)  => {
    console.log('reached add data')
    return dispatch => {
        console.log('before dispatch')
        dispatch({type: ADD_USER_START});
        console.log('inside return')
        axiosWithAuth()
            .post(`http://localhost:5000/api/users`, values)
            .then(res => {
                dispatch({type: ADD_USER_SUCCESS})
                console.log('axios requist sent')
                console.log(res)}
                )
            .catch(err => {
                dispatch({type: ADD_USER_FAILURE})
                console.log(err)
            })
    }
}

export const editData = (id, values)  => {
    return dispatch => {
        dispatch({type: ADD_EDIT_START});
        axiosWithAuth()
            .put(`http://localhost:5000/api/users/${id}`, values)
            .then(res => {
                dispatch({type: ADD_EDIT_SUCCESS})
                console.log(res)}
                )
            .catch(err => {
                dispatch({type: ADD_EDIT_FAILURE})
                console.log(err)
            })
    }
}