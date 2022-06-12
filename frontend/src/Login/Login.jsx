import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './style';

export const Login = ({ loginCallback }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();
    let formData = {}
    const data = new FormData(e.currentTarget)
    for (const [name, value] of data) {
      formData[name] = value;
    }
    try {

      let data = JSON.stringify({
        password: formData.password,
        username: formData.username
      })

      const res = await axios.post('http://localhost:5000/auth/login', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const { access_token } = res.data;
      localStorage.setItem("token", access_token)
      loginCallback(true);
    } catch (error) {

      console.log(error.message)
      setFormData({ username: "", password: "" });
    }
  }

  return (
    <style.Login>
      <div className="wrapper">
        <form className="login" onSubmit={handleSubmit}>
          <p className="title">Log in</p>
          <input value={formData.username}
            onChange={e => setFormData({
              [e.target.name]: e.target.value
            })}
            name="username"
            type="text"
            placeholder="Username"
            autoFocus />
          <i className="fa fa-user"></i>
          <input
            onChange={e => setFormData({
              [e.target.name]: e.target.value
            })}
            value={formData.password}
            name="password"
            type="password"
            placeholder="Password" />
          <i className="fa fa-key"></i>
          <a href="#">Forgot your password?</a>
          <button>
            <i className="spinner"></i>
            <span className="state">Log in</span>
          </button>
        </form>
      </div>
    </style.Login>
  )
}