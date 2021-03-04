import React from 'react';
import PropTypes from 'prop-types';
import MemoizedTask from '../Task/Task';
import styles from './tasks.module.css';

const TasksList = (props) => {
  const { tasks } = props;

  return (
    <div className={styles.list}>
      {
        tasks.map((item) => (
          <MemoizedTask
            key={item.id}
            description={item.description}
            image={item.image}
          />
        ))
      }
    </div>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
  })),
};

TasksList.defaultProps = {
  tasks: [],
};

export default TasksList;
