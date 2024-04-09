import React, {useState, useEffect}from 'react'
import axios from 'axios'

function FetchingDateUSeReducer() {
    const [isLoading, setIsLoading ] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    
    // If the transaction getting success then .then block will be executed and return three methods below. Otherwise .cath() will e executed.

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            setIsLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(error => {
            setIsLoading(false)
            setPost({})
            setError('Something went wrong')
        })
    },[])
    
    return (
        <div>
            {isLoading ? 'Loading' : post.title}
            {error ? error: null}
        </div>
    )
 
}

export default FetchingDateUSeReducer