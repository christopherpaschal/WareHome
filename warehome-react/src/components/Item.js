import React, { Component } from 'react';
import { Link } from 'react-router';
import Popup from "reactjs-popup";

import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { getItemData } from '../api/warehome-api';

class Item extends Component {

  constructor() {
    super();
    this.state = { showNotes: false };
  }

  toggleNotes = () => {
    this.state.showNotes ? this.setState({ showNotes: false }) : this.setState({ showNotes: true });;
  }

  render() {
    return (
      <div>
        <h3><span className="btn" onClick={this.toggleNotes}>{this.props.name}</span></h3>
        { this.state.showNotes ? <p>{this.props.notes}</p> : null }
      </div>
    );
  }

}

export default Item;
