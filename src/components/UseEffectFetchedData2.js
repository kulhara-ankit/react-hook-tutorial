// Here we use Axios package to fetch data
// npm install axios --save

// in browser search json placeholder to get api for practice

// here we are making the code in such a way that we display on post at a time 

import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchedData2() {
    const [post, setPost] = useState({}) // make it empty array
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [id])

    // Here id is the dependencies, that we passed as an argumentin useEffectHook

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default FetchedData2


