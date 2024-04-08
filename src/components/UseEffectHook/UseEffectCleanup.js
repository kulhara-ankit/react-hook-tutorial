import React, {useEffect, useState} from 'react'
import MouseEvent from './UseEffectOnlyOnce'

function MouseCompenent(){
    
    const [display, setDisplay] = useState(true)

    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <MouseEvent />}
        </div>
    )
}

export default MouseCompenent