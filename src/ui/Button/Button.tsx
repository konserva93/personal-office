import * as S from './Button.styled';
import React, { FC } from 'react';
import { ButtonProps } from 'semantic-ui-react';

type TProps = ButtonProps & {
  children: string;
  className?: string;
};

export const Button: FC<TProps> = ({ children, className, ...rest }) => (
  <S.Button className={className} {...rest}>{children}</S.Button>
);
