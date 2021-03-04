import InvalidTextField from './InvalidTextField';

const defaultOptions = {
  required: false,
};

const validateTextField = (value, attributes) => {
  const { fieldName, options = defaultOptions } = attributes;
  const { required } = options;

  if (value) return;

  if (required) throw new InvalidTextField('ERR_FIELD_EMPTY', fieldName);
};

export { validateTextField };
