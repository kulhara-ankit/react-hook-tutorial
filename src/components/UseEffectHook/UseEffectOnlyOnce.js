import React, {useEffect, useState} from 'react'

function MouseEvent(){
    
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePointer = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener('mousemove', logMousePointer)

        return () => {
            console.log('Remove listener')
            window.removeEventListener('mousemove', logMousePointer)
        }
    }, [])

    return (
        <div>
           Hooks X {x} : Hooks Y {y}
        </div>
    )
}

export default MouseEvent