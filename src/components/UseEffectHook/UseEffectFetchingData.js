// Here we use Axios package to fetch data
// npm install axios --save

// in browser search json placeholder to get api for practice

import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchedData() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchedData


