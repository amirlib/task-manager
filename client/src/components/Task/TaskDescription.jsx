import React from 'react';
import PropTypes from 'prop-types';
import styles from './task.module.css';

const TaskDescription = (props) => {
  const { value } = props;

  return (
    <p className={styles.description}>
      {`Description: ${value}`}
    </p>
  );
};

TaskDescription.propTypes = {
  value: PropTypes.string.isRequired,
};

export default TaskDescription;
