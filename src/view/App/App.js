import React, { Component } from 'react';
import data from '../../data/csa';

import Backdrop from './Backdrop/Backdrop';
import classes from './_App.scss';

class App extends Component {
  componentDidMount = () => {
    this.setState({ data });
  }
  render() {
    return (
      <div className={classes.app}>
        <Backdrop />
        {data ? data.map(chapter =>
          (<p key={chapter.id}className="App-intro">
            {chapter.chapterName}
          </p>),
        ) : null
        }
      </div>
    );
  }
}

export default App;
