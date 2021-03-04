import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import newTaskStyle from './newTask.module.css';
import buttonsStyle from '../../styles/buttons.module.css';
import { createFormData } from '../../helpers/formData.helper';
import { addTask } from '../../task/task.api';
import { taskSanitizer, validateTask } from '../../task/task.validator';

const getDefaultError = () => '';
const getDefaultValues = () => ({
  description: '',
  image: {},
});

const NewTask = () => {
  const [error, setError] = useState(getDefaultError());
  const [values, setValues] = useState(getDefaultValues());

  const handleChange = (evt) => {
    const { name } = evt.target;
    const value = name === 'image'
      ? evt.target.files[0]
      : evt.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleAdd = async () => {
    if (error) setError('');

    const sanitizedValues = taskSanitizer(values);
    const validations = validateTask(sanitizedValues);

    if (validations.error) {
      setError(validations.error);

      return;
    }

    const taskData = createFormData(sanitizedValues);
    const res = await addTask(taskData);

    if (res.error) setError(res.error);
  };

  const handleClear = () => {
    setError(getDefaultError());
    setValues(getDefaultValues());
  };

  return (
    <div className={newTaskStyle.root}>
      <span className={newTaskStyle.title}>Add New Task</span>

      <NewTaskForm
        error={error}
        handleChange={handleChange}
        values={values}
      />

      <div className={newTaskStyle.actions}>
        <button
          className={buttonsStyle.button}
          onClick={handleAdd}
          type="submit"
        >
          ADD
        </button>

        <button
          className={buttonsStyle.button}
          onClick={handleClear}
          type="button"
        >
          CLEAR
      </button>
      </div>
    </div>
  );
};

export default NewTask;
