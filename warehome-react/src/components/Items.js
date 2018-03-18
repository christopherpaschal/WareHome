import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Item from './Item';
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
    items.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
    });

    return (
      <div>
        <Nav />
        <h3>My Items</h3>
      <hr/>

      <ul>
      { items.map((item, index) => (
      <Item name={item.name} notes={item.notes} key={index}/>
      ))}
      {/* { items.map((item, index) => (
            <div className="col-sm-12" key={index}>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title"> <span className="btn">{ item.name }</span></h3>
                </div>
                <div className="panel-body">
                  <p> { item.notes } </p>
                </div>
              </div>
            </div>
        ))} */}
        </ul>
      </div>
    );
  }

}

export default Items;
