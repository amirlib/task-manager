import validator from 'validator';
import { validateImageFile } from '../validations/file.validator';
import { validateTextField } from '../validations/textField.validator';
import InvalidFileError from '../validations/InvalidFileError';
import InvalidTextField from '../validations/InvalidTextField';
import taskModel from './task.model';

const taskSanitizer = (values) => ({
  description: validator.escape(values.description.trim()) || undefined,
  image: values.image,
});

const validateTask = (values) => {
  try {
    validateTextField(values.description, taskModel.description);
    validateImageFile(values.image, taskModel.image);

    return { valid: true };
  } catch (err) {
    if (err instanceof InvalidFileError || err instanceof InvalidTextField) {
      return { error: `${err.fieldName} ${err.message}` };
    }

    return { error: 'An error occurred' };
  }
};

export { taskSanitizer, validateTask };
