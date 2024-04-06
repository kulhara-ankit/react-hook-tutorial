import React, {useContext} from 'react'
import ComponentC from './componentC'
import {UserContext, ChannelContext} from './UseContext'

function ComponentB(){

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    
    return(
        <div>
            <h1> {user} - {channel}</h1>
        </div>
    )
}

export default ComponentB