import React, { useEffect } from 'react';
import style from './style';

export const Login = () => {

  useEffect(() => {
    var working = false;
    // $('.login').on('submit', function (e) {
    //   e.preventDefault();
    //   if (working) return;
    //   working = true;
    //   var $this = $(this),
    //     $state = $this.find('button > .state');
    //   $this.addClass('loading');
    //   $state.html('Authenticating');
    //   setTimeout(function () {
    //     $this.addClass('ok');
    //     $state.html('Welcome back!');
    //     setTimeout(function () {
    //       $state.html('Log in');
    //       $this.removeClass('ok loading');
    //       working = false;
    //     }, 4000);
    //   }, 3000);
    // });
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    let formData = {}
    const data = new FormData(e.currentTarget)
    for (const [name, value] of data) {
      formData[name] = value;
    }
  }

  return (
    <style.Login>
      <div className="wrapper">
        <form className="login" onSubmit={handleSubmit}>
          <p className="title">Log in</p>
          <input name="username" type="text" placeholder="Username" autoFocus />
          <i className="fa fa-user"></i>
          <input name="password" type="password" placeholder="Password" />
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