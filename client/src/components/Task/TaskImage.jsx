import React from 'react';
import PropTypes from 'prop-types';
import styles from './task.module.css';

const TaskImage = (props) => {
  const { image } = props;

  return (
    <img
      alt=""
      className={styles.media}
      src={`data:image/jpeg;base64,${image}`}
    />
  );
};

TaskImage.propTypes = {
  image: PropTypes.string,
};

TaskImage.defaultProps = {
  image: '',
};

export default TaskImage;
