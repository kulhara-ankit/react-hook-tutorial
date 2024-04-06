import React, {useEffect, useState} from 'react'

function UseEffectHook(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('document gets updated')
        document.title = `You have clicked ${count} times`
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Count : {count}</button>
        </div>
    )
}

export default UseEffectHook