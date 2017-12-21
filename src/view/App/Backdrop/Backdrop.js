import React from 'react';
// import PropTypes from 'prop-types';

import classes from './_Backdrop.scss';

const Backdrop = () => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.stars} />
      <div className={classes.twinkling} />
      <div className={classes.clouds} />
    </div>
  );
};

Backdrop.propTypes = {
};

export default Backdrop;
