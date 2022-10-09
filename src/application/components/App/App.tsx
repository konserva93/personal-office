import * as S from './App.styled';
import React from 'react';
import { Layout } from '../Layout/Layout';
import { Menu } from '../Menu/Menu';
import { Header } from '../Header/Header';

function App(): JSX.Element {
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
