import React, { useState, useEffect } from "react";
import { Link, } from "react-router-dom";
import axios from 'axios'
//components
import UserRegister from "./UserRegister";

export default function UserForm() {

  useEffect(() => {
    
  }, [])

  const [formDetails, setFormDetails] = useState({ name: "", password: "" });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(formDetails);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    //prcoess Done before clearing
    axios({
      method: 'post',
      url: 'http://localhost:8080/Login',
      data: formDetails,
      headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    })

    setFormDetails({ name: "", password: "" });

  }

  return (
    <div className="container userform gap">
      <div className="row">
        <div className="col"></div>
        <div className="col-md-6">
          <h2> Log-in</h2>
          <form method="post">
            <div className="dd">
              <label htmlFor="name">   <i className="fas fa-user  icon-deco"></i></label>
              <input type="text" placeholder="User Name" name="name" className="form-control" onChange={handleChange} />
            </div>
            <div className="dd">
              <i className="fas fa-key icon-deco"></i>  <input type="password" placeholder="Password" name="password" className="form-control" onChange={handleChange} />
            </div>
            <input type="submit" className="btn btn-primary coolbuttonFullWidth" onClick={handleSubmit} />

          </form>


          <div className="further-links">
            <Link to="/forgot-password">
              <p>Forgot Password</p> <br />
            </Link>
            <Link to="/create-account">
              <p>Create New Account </p>
            </Link>
            <br />
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
