import React from 'react';
import PropTypes from 'prop-types';
import style from '../../styles/form.module.css';
import ImageUploadInput from './ImageUploadInput';
import ErrorMessage from '../UI/ErrorMessage';

const NewTaskForm = (props) => {
  const { error, handleChange, values } = props;

  return (
    <div className={style.form}>
      <label
        className={style.alignLeft}
        htmlFor="description"
      >
        Description
      </label>

      <textarea
        autoComplete="off"
        className={style.textarea}
        id="description"
        onChange={handleChange}
        name="description"
        rows="2"
        value={values.description}
      />

      <span className={`${style.textHelper} ${style.alignLeft}`}>
        Description is required
      </span>

      <ImageUploadInput
        handleChange={handleChange}
        image={values.image}
      />

      <ErrorMessage errorText={error} />
    </div>
  );
};

NewTaskForm.propTypes = {
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

NewTaskForm.defaultProps = {
  error: '',
  values: {
    description: '',
    image: {
      name: '',
    },
  },
};

export default NewTaskForm;
