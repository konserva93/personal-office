import * as S from './Header.styled';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@src/ui/Button/Button';

type Props = {
  title: string;
};

const BackButton: FC<{}> = () => {
  const navigate = useNavigate();
  return (
      <Button onClick={() => navigate(-1)}>back</Button>
  );
};

export const Header: FC<Props> = ({ title }) => (
  <S.Header>
    <BackButton/>
    <S.Title>{title}</S.Title>
  </S.Header>
);
