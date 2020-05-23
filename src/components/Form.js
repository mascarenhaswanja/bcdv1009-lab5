

import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");


    function handleSubmit (event) {
        event.preventDefault();      
        alert(`Name: ${name}   Age: ${age}`);
       
    }; 

    return (
          <>
            <form onSubmit={handleSubmit}>
                <label>Name:  <input type="text" name="name" id="name" placeholder="Enter your name"
                                value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>Age:  <input type="text" name="age" id="age" placeholder="Enter your age"
                                value={age} onChange={e => setAge(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
          </>
      );
       
}
export default Form;