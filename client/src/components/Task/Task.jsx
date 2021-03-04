import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TaskDescription from './TaskDescription';
import TaskImage from './TaskImage';
import styles from './task.module.css';

const Task = (props) => {
  const { description, image } = props;

  const renderImage = () => {
    if (!image) return null;

    return <TaskImage image={image} />;
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <TaskDescription value={description} />

        {renderImage()}
      </div>
    </div>
  );
};

Task.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

Task.defaultProps = {
  image: '',
};

const MemoizedTask = memo(Task);

export default MemoizedTask;
