import React, { Component } from 'react';

import data from '../../data/csa';

import Backdrop from './Backdrop/Backdrop';
import Chapter from './Chapter/Chapter';

import classes from './_App.scss';

class App extends Component {
  componentDidMount = () => {
    this.setState({ data });
  }
  render() {
    return (
      <div className="app-wrapper">
        <Backdrop />
        <div className={classes.app}>
          <Chapter data={data} />
        </div>
      </div>
    );
  }
}

export default App;
