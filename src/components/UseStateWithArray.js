import React, {useState} from 'react'

function UseStateWithArray() {

    const [item, setItem] = useState([])
    
    const addItems = () => {
        setItem([...item, {
            id: item.length,
            value: Math.ceil(Math.random() * 10) + 1
        }])
    }

    return(
        <>
            <button onClick={addItems}>Add item to button</button>
            <ul>
                {
                    item.map(eachItem => (
                        <li key={eachItem.id}>{eachItem.value}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default UseStateWithArray