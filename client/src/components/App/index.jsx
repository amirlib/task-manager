import React from 'react';
import style from './app.module.css';
import NewTask from '../NewTask';
import Tasks from '../Tasks/Tasks';

const App = () => (
  <div className={style.root}>
    <NewTask />

    <Tasks />
  </div>
);

export default App;
