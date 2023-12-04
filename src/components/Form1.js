import React from 'react'
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


function Form1() {
    const navigate = useNavigate();
   const[state, setState] = React.useState({fname:"", lname:"", email:""})
   const [phoneNumber, setPhoneNumber] = useState('');
   const handleChange = (value) => {
    setPhoneNumber(value);
    console.log()
  };
   function reset(ev){
    ev.preventDefault();
    setState({fname:"", lname:"", email:""})
    setPhoneNumber('');
   }
  const value = Object.values(state)
   var s = `Name : ${value[0]} ${value[1]} \nPhone number: ${phoneNumber}\nEmail: ${value[2]}`;
 const send=()=>{
    alert(s);
    navigate('home');
 }
  return (
      <div className = "maindiv">
      <div className = "subdiv">
      <h3>Speak to our expert</h3>
      <form>
        <h6>First Name</h6>
        <div className = "inp1">
        <div class="input-group mb-3">
  <input type="text"
  value={state.fname}
  name="fname"  
  onChange ={(ev)=>{setState({...state, fname:ev.target.value});
}}
class="form-control" placeholder="First name" aria-label="Username" aria-describedby="basic-addon1"></input></div></div>
      <h6>Last Name</h6>
      <div className= "inp1">
      <div class="input-group mb-3">
  <input type="text"
  value={state.lname}
   onChange ={(ev)=>{setState({...state, lname:ev.target.value});}}
   class="form-control" placeholder="Last name" aria-label="Username" aria-describedby="basic-addon1"></input></div></div>
      <h6>Phone number</h6>
      <div className='inp1'>
    <PhoneInput 
          country={'in'}
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{
            required: true,
          }
        }
        style={{width: "90%"}}
        ></PhoneInput></div>
      <h6>Email ID</h6>
      <div className = "inp1">
      <div class="input-group mb-3">
  <input type="email" 
  value={state.email}
  onChange = {(ev)=>{setState({...state, email:ev.target.value});}}
   class="form-control" placeholder="xyz@organisation.com" aria-label="Username" aria-describedby="basic-addon1"></input></div></div>
    <div>
        <div className = "buttons">
        <Button onClick={reset} variant="secondary">Discard</Button>{' '}
    <Button onClick = {()=>{send()}} variant="primary">Send</Button>{' '}</div>
    </div>
      </form>
      </div>
      </div>
  )
}

export default Form1
