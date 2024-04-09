import React, {useEffect, useState, useRef} from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return(
        <div>
            <h1>Hook Timer - {timer}</h1>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear the Tiemr</button>
        </div>
    )
}

export default HookTimer

// useRef directly access the DOM node from the functions