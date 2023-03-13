import React from 'react';

import { ErrorMessageStyle } from './ErrorMessage.style';
import { useError } from 'context/Hooks';

export const ErrorMessage = () => {
  const { error } = useError();
  return <ErrorMessageStyle>{error.default}</ErrorMessageStyle>;
};

export default ErrorMessage;
