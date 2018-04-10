import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home'
import House from './house'
import Garden from './garden'

import './index.css';

export default class Router extends Component {
  render() {
    return <div style={{ width: '100%', height: '100%' }}>
      <Route path="/" exact component={Home} />
      <Route path="/house" exact component={House} />
      <Route path="/garden" exact component={Garden} />
    </div>
  }
}