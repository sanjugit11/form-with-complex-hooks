
import React, { useState } from 'react';
import './index.css';

const App = () =>{
  const [setname,setfullname] = useState({
    fname:'',
    lname:'',
    email:'',
    phone:'',
  })
  const inputChange = (event) =>{
    const {name,value} = event.target;

     setfullname ((mycall) =>{
      return{
          ...mycall,
          [name]:value,
      }
    })
  }

  const submit = (event) =>{
    event.preventDefault()
  }


    return(
      <>
      <form onSubmit={submit}>
    <h1>HELLO {setname.fname} {setname.lname}
              {setname.email} {setname.phone}
     </h1>
    <input type ="text" placeholder="fill your name"
           onChange={inputChange}
           value={setname.fname}
           name= 'fname'
    />
    <input type ="text" placeholder="fill your lastname"
           onChange={inputChange}
           value={setname.lname}
           name='lname'
    />
    <input type ="text" placeholder="fill your emial"
           onChange={inputChange}
           value={setname.email}
           name='email'
    />
    <input type ="text" placeholder="fill your phone"
           onChange={inputChange}
           value={setname.phone}
           name='phone'
    />
    <button>clickme</button>
    </form>
    </>
    )
}

export default App;