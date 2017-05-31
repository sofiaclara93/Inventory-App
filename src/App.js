import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import InventoryList from './InventoryList/InventoryList'
import ItemDetail from './ItemDetail/ItemDetail'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      fetching: true,
      inventory: {}
    };
  }

  componentWillMount() {
    fetch('http://localhost:4000/db')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          fetching: false,
          inventory: responseJson.inventory
        })
      });
  }

  renderInventoryWhenReady() {
    if (this.state.fetching) {
      return (
        <p className="loading-indicator"> Loading ... </p>
      );
    }
    return (
      <InventoryList items={this.state.inventory} />
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Inventory</h2>
        </div>
          <div className="App-content-container">
          {this.renderInventoryWhenReady()}
          < ItemDetail
          />
          </div>
      </div>
    );
  }
}

export default App;
