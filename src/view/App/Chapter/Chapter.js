import React from 'react';
// import PropTypes from 'prop-types';

import classes from '../_App.scss';

const Backdrop = ({ chapters }) => {
  console.log(chapters);
  return (
    <div>
      {chapters ? chapters.map(chapter =>
        (<p key={chapter.id} className={classes.chapterName}>
          {chapter}
        </p>),
      ) : null
      }
    </div>
  );
};

Backdrop.propTypes = {
};

export default Backdrop;
