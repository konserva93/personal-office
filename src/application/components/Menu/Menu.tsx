import * as S from './Menu.styled';
import React, { FC } from 'react';
import { useServiceGroupsStorage } from '../../redux/rootReducer';

export const Menu: FC<{}> = () => {
  const serviceGroups = useServiceGroupsStorage();
  return (
    <S.Wrapper>
      {serviceGroups.map((group) => (
        <div key={group.id}>{group.caption}</div>
      ))}
    </S.Wrapper>
  );
};
