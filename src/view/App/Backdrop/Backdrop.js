import React from 'react';
// import PropTypes from 'prop-types';

// import classes from './_Backdrop.scss';

const Backdrop = () => {
  return (
    <div className="backdrop">
      <div className="stars" />
      <div className="twinkling" />
      <div className="clouds" />
    </div>
  );
};

Backdrop.propTypes = {
};

export default Backdrop;
