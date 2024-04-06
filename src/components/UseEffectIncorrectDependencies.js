import React, {useEffect, useState} from 'react'

function IntervalCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        // setCount(count + 1)
        setCount(prevCount => prevCount + 1)
    }

    
    useEffect(() => {
        
        const interval = setInterval(tick, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>count {count}</h1>
        </div>
    )
}

export default IntervalCounter