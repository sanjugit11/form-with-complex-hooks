import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [name,UpdatedName] = useState()
  const [clikname,fullname]= useState()
  const inputValue = (event) =>{
      // console.log(event.target.value);
      UpdatedName(event.target.value);
  }
  const setInput = () =>{
    fullname(name);
  }
  return(
   <>
   <div>
   <h1> hello {clikname} </h1>
   <input placeholder="enter your name" 
   onChange={inputValue}
   value={name}
    ></input>
   <button onClick={setInput}>submit</button>
   </div>
   </>
  )
};

export default App;