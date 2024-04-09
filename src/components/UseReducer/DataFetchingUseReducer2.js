import React, {useState, useEffect, useReducer}from 'react'
import axios from 'axios'

const initialState = {
    isLoading : true,
    error: '',
    post: {}
}


const reducer = (state, action) => {

    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                isLoading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                isLoading: false,
                post: {},
                error: 'Something went wrong'
            }
            default:
                return state
    }
}

function FetchingDateUSeReducerTwo() {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            dispatch({type: 'FETCH_SUCCESS', payload: res.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])

    return (
        <div>
            {state.isLoading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
 
}

export default FetchingDateUSeReducerTwo