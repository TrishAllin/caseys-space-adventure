import React from 'react';
// import PropTypes from 'prop-types';

import classes from '../_App.scss';

const Backdrop = ({ data }) => {
  return (
    <div>
      {data ? data.map(chapter =>
        (<p key={chapter.id} className={classes.chapterName}>
          {chapter.chapterName}
        </p>),
      ) : null
      }
    </div>
  );
};

Backdrop.propTypes = {
};

export default Backdrop;
