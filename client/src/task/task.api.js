import { createErrorObject, getFirstErrorFromObject } from '../helpers/errors.helper';

const addTask = async (task = {}) => {
  try {
    const res = await fetch(
      'https://localhost:44368/api/tasks/',
      {
        body: task,
        method: 'POST',
      },
    );

    const parsedRes = await res.json();

    if (parsedRes.errors) {
      const error = getFirstErrorFromObject(parsedRes.errors);

      return createErrorObject(error);
    }

    return parsedRes;
  } catch (err) {
    return createErrorObject();
  }
};

const getTasks = async () => {
  try {
    const res = await fetch(
      'https://localhost:44368/api/tasks/',
      {
        method: 'GET',
      },
    );

    return res.json();
  } catch (err) {
    return createErrorObject();
  }
};

export { addTask, getTasks };
