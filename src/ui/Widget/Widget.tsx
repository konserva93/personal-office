import * as S from './Widget.styled';
import React, { FC } from 'react';

type TProps = {
  title: string;
};

export const Widget: FC<TProps> = ({ title }) => (
  <S.Card>
    <S.Header>{title}</S.Header>
  </S.Card>
);
