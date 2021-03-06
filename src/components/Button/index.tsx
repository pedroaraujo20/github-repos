import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button = ({ loading, children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {loading ? 'Carregando...' : children}
    </StyledButton>
  );
};

export default Button;
