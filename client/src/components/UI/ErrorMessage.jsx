import React from 'react';
import PropTypes from 'prop-types';
import style from './messages.module.css';

const ErrorMessage = (props) => {
  const { errorText } = props;

  return (
    <>
      {
        errorText && (
          <p className={style.error}>
            <i className="fas fa-exclamation-circle" />

            {errorText}
          </p>
        )
      }
    </>
  );
};

ErrorMessage.propTypes = {
  errorText: PropTypes.string,
};

ErrorMessage.defaultProps = {
  errorText: '',
};

export default ErrorMessage;
