import React, {Component} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserRegister from './pages/userRegister';
import UserLogin from './pages/userLogin';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={ <UserRegister /> } />
        <Route path="signup" element={ <UserRegister /> } />
        <Route path="login" element={ <UserLogin /> } />
      </Routes>
    );
  }
}

export default App;