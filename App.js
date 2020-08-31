import React, { useState } from 'react';
import './index.css';

const App = () => {
const [fullName,UpdatedName] = useState({
  fname:'',
  lname:'',
  email:'',
  phone:'',
});


  const inputValue = (event) =>{
    // console.log(event.target.value);
    // UpdatedName(event.target.value);
    const value = event.target.value;
    const name = event.target.name;
    // const email = event.target.email;
    // const phone = event.target.phone;
  
    UpdatedName( (preValue) => {
      if(name === "fname"){
        return{
          fname: value,
          lname:preValue.lname,
          phone:preValue.phone,
          email: preValue.email ,
        }
          } else if (name === "lname"){
            return {
              fname: preValue.fname,
              lname: value ,
              phone:preValue.phone,
              email: preValue.email ,
        }
      }else if (name === "email"){
        return {
          fname: preValue.fname,
          lname: preValue.lname ,
          email: value,
          phone:preValue.phone,
          }
        }else if (name === "phone"){
          return {
            fname: preValue.fname,
            lname: preValue.lname ,
            email: preValue.email ,
            phone: value ,

         }   
      }  

    })
  }
  const setInput = (event) =>{
   // event.preventDefault();
    alert('your form get submitted');
  };

  return(
   <>
   <div>
     <form onSubmit={setInput} >
   <h1> hello {fullName.fname} {fullName.lname} {fullName.email} {fullName.phone}  </h1>

   <input placeholder="enter your name" 
   onChange={inputValue}
   value={fullName.fname}
   name= 'fname'
    />
    <input placeholder="password" onChange={inputValue}
    value={fullName.lname}
    name="lname"
    />

   
    <input placeholder="Email" onChange={inputValue}
    value={fullName.email}
    name="email"
    />
   
    <input placeholder="phone" onChange={inputValue}
    value={fullName.phone}
    name="phone"
    />
   <button >submit</button>
   </form>
   </div>
   
   </>
  )
};

export default App;