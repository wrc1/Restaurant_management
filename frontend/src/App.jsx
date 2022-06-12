import React, { useEffect, useState } from 'react';
import './App.css';
import { Dashboard } from './Dashboard/Dashboard';
import { Login } from './Login/Login';


function App() {
  const [isLogin, setIsLognin] = useState(false);

  const loginValidation = isValid => {
    setIsLognin(isValid);
  }

  useEffect(() => {
    // need to check if token expired
    const token = localStorage.getItem('token');
    if (token) {
      setIsLognin(true);
    }
  }, [])
  return (
    <div className="App">

      {!isLogin ? <Login loginCallback={loginValidation} /> : <Dashboard />}
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
