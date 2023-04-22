import React, { Component, useState, useEffect } from 'react' 
import axios from 'axios'
  function Signup ()  {
    const [formData, setFormData] = useState({
      username:'',email:'',userpassword:'',picture:''
    })
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [picture, setPicture] = useState('')
    const handleChange = (e)  => { 
      // console.log(e.target.value, 'some message')
      setFormData( (values)=>({...values,[e.target.name]:e.target.value}))

    }
    async function handleSubmit (e) {
    console.log(formData)
    e.preventDefault()
    // setFormData({...values,name:})
    const formDataValue = JSON.stringify(formData)
    console.log('hello there',JSON.stringify(formData))
    const response = await axios.post(`${process.env.REACT_APP_BACKENDURL}/signup`,formDataValue).catch((error)=>{
      console.log(error)
    })
    console.log(response)
  }

  
    return (
      <div>
      <form>
      <br></br>
      <div classNameName="mb-3">
        <label for="exampleInputEmail1" className="form-label">Name </label>
        <input onChange={handleChange} name='username' type="name" className="form-control" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text"></div>
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input onChange={handleChange} name='email' type="email" className="form-control"  aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text"></div>
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Password</label>
        <input onChange={handleChange} name='userpassword' type="password" className="form-control"  aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text"></div>
      </div>

      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Profile Picture</label>
        <input onChange={handleChange} name='picture' placeholder='(Optional) Image URL' type="text" className="form-control" id="exampleInputPassword1"/>
      </div>

      <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    )
  }


export default Signup