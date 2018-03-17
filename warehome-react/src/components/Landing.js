import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';

class Landing extends Component {

  render() {
    return (
      <div>
        <div>
          <text>WareHome</text>
        </div>
        <div>
          <button className="btn btn-info log" onClick={() => login()}>Log In</button>
        </div>
      </div>
    );
  }

}

export default Landing;
