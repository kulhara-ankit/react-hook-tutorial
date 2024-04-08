import React from 'react'
import ComponentB from './componentB'
import { UserContext, ChannelContext } from './UseContext'

function ComponentA(){

    return(
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User COntext Value {user}, and channel Context value {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentA