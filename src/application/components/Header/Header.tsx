import * as S from './Header.styled';
import React, { FC } from 'react';

type Props = {
  title: string;
};

export const Header: FC<Props> = ({ title }) => <S.Header>{title}</S.Header>;
