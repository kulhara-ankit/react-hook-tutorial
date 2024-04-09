import React, {useEffect, useRef} from 'react'

function FocusPoint() {

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
        // ficus the input element
    },[])

    return(
        <div>
            <input ref={inputRef} type='text'/>
        </div>
    )
}

export default FocusPoint

// useRef directly access the DOM node from the functions