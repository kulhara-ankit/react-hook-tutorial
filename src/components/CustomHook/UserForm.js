import React from "react";
import useInput from "../Hooks/useInput";


function UserForm() {

  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindlastName, resetlastName] = useInput('') 

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello! ${firstName} ${lastName}`)
    resetFirstName()
    resetlastName()
   }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input type='text' {...bindFirstName}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' {...bindlastName}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default UserForm;

// Here we passing the custom hooks
