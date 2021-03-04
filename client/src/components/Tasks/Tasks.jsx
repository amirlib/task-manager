import React, { useState } from 'react';
import TasksList from './TasksList';
import tasksStyle from './tasks.module.css';
import buttonsStyle from '../../styles/buttons.module.css';
import { getTasks } from '../../task/task.api';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks();

    if (res && !res.error) setTasks(res);
  };

  return (
    <div className={tasksStyle.root}>
      <span className={tasksStyle.title}>Tasks</span>

      <TasksList tasks={tasks} />

      <button
        className={buttonsStyle.button}
        onClick={fetchTasks}
        type="button"
      >
        SHOW
      </button>
    </div>
  );
};

export default Tasks;
