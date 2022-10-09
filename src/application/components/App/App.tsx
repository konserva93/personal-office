import * as S from './App.styled';
import React, { useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { Menu } from '../Menu/Menu';
import { Header } from '../Header/Header';
import { getServiceGroups } from '../../../adapters/serviceGroups/serviceGroups';

function App(): JSX.Element {
  useEffect(() => getServiceGroups(), []);

  return (
    <S.Wrapper>
      <Menu />
      <S.Content>
        <Header />
        <Layout />
      </S.Content>
    </S.Wrapper>
  );
}

export default App;
