import * as S from './App.styled';
import React, { useEffect } from 'react';
import { Menu } from '@components/Menu/Menu';
import { getServiceGroups } from '@adapters/serviceGroups/serviceGroups';
import { useServiceGroupsStorage } from '@redux/rootReducer';
import { MainContent } from '@application/components/MainContent/MainContent';

function App(): JSX.Element {
  useEffect(() => {
    console.log('app mount');
    void getServiceGroups();
  }, []);

  const serviceGroups = useServiceGroupsStorage();
  return (
    <S.Wrapper>
      <Menu serviceGroups={serviceGroups} />
      <MainContent
        serviceGroup={serviceGroups.find((group) => group.selected)}
      />
    </S.Wrapper>
  );
}

export default App;
