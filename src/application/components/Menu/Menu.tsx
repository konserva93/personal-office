import * as S from './Menu.styled';
import React, { FC } from 'react';
import { ServiceGroupInfo } from '@application/types/serviceGroups';
import { useNavigate } from 'react-router-dom';

interface Props {
  serviceGroups: ServiceGroupInfo[];
}

export const Menu: FC<Props> = ({ serviceGroups }) => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      {serviceGroups.map((group) => (
        <S.Item key={group.id} onClick={() => navigate(`/${group.id}`)}>{group.title}</S.Item>
      ))}
    </S.Wrapper>
  );
};
