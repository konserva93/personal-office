import * as S from './Button.styled';
import React, { FC } from 'react';

type TProps = {
  caption: string;
  className?: string;
};

export const Button: FC<TProps> = ({ caption, className }) => (
  <S.Button className={className}>{caption}</S.Button>
);
