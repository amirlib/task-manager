const defaultErrorMessage = 'An error occurred. Please try again';

const createErrorObject = (error = defaultErrorMessage) => ({ error });

const getFirstErrorFromObject = (errors) => {
  const pairs = Object.entries(errors);

  if (pairs.length === 0) return defaultErrorMessage;

  if (!Array.isArray(pairs[0][1]) || pairs[0][1].length === 0) return defaultErrorMessage;

  return pairs[0][1][0];
};

export { createErrorObject, getFirstErrorFromObject };
