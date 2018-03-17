import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { getFoodData } from '../api/chucknorris-api';

class Items extends Component {

  render() {
    return (
      <div>
        <Nav />
        <h3>My Items</h3>
      </div>
    );
  }

}

export default Items;
