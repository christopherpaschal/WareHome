import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { getItemData } from '../api/warehome-api';

class Items extends Component {

  constructor() {
    super()
    this.state = { items: [] };
  }

  getItems() {
    getItemData().then((items) => {
      this.setState({ items });
    });
  }

  componentDidMount() {
    this.getItems();
  }

  render() {

    const { items }  = this.state;

    return (
      <div>
        <Nav />
        <h3>My Items</h3>
      <hr/>

      { items.map((item, index) => (
            <div className="col-sm-6" key={index}>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title"> <span className="btn">#{ item.id }</span></h3>
                </div>
                <div className="panel-body">
                  <p> { item.name } </p>
                </div>
              </div>
            </div>
        ))}
      </div>
    );
  }

}

export default Items;
