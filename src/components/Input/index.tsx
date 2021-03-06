import React, { InputHTMLAttributes } from 'react';

import { StyledInput } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
