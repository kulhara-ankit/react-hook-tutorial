import React from 'react'
import ComponentA from './componentA'
import ComponentB from './componentB'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function UseContextHook(){

    return(
        <div>
            <UserContext.Provider value={'ankit'}>
                <ChannelContext.Provider value={"Hello World!"}>
                    <ComponentA/>
                    <ComponentB/>
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )

}

export default UseContextHook

// We use UseContext here instead of App.js 