const errorMessages = {
  ERR_FIELD_EMPTY: 'field is required',
  ERR_INVALID_FILE: 'Invalid Field',
};

class InvalidTextField extends Error {
  constructor(code, fieldName = '') {
    super();

    this.code = code;
    this.fieldName = fieldName;
    this.message = errorMessages[code];
    this.name = 'InvalidTextField';

    Error.captureStackTrace(this, InvalidTextField);
  }
}

export default InvalidTextField;
