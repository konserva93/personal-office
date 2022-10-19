import * as S from './Menu.styled';
import React, { FC } from 'react';
import { ServiceGroupInfo } from '@application/types/serviceGroups';

interface Props {
  serviceGroups: ServiceGroupInfo[];
}

export const Menu: FC<Props> = ({ serviceGroups }) => (
  <S.Wrapper>
    {serviceGroups.map((group) => (
      <div key={group.id}>{group.title}</div>
    ))}
  </S.Wrapper>
);
