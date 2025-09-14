import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
    let navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })
    const {name,username,email}=user;
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const OnSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/");
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h1 className="text-center m-4">Register User</h1> 
            <form onSubmit={(e)=>OnSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="Name" clasName="form-label">Name</label>
                <input text={"text"} className="form-control" placeholder="Enter Name" name="name" value={name} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="Username" clasName="form-label">UserName</label>
                <input text={"text"} className="form-control" placeholder="Enter UserName" name="username" value={username} onChange={(e)=>onInputChange(e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="Email" clasName="form-label">Email</label>
                <input text={"text"} className="form-control" placeholder="Enter Email Address" value={email} onChange={(e)=>onInputChange(e)} name="email"/>
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
            </form>
        </div>
      </div>
    </div>
  );
}
