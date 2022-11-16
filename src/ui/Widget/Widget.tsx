import * as S from './Widget.styled';
import { isTextWidgetProperties, Widget as TWidget } from '@adapters/serviceGroups/types/contentAreas';
import React, { FC } from 'react';

type TProps = {
  title: string;
  properties: TWidget['properties'];
};

export const Widget: FC<TProps> = ({ title, properties }) => (
  <S.Card style={{ maxWidth: '-webkit-fill-available' }}>
    <S.Header>{title}</S.Header>
    {isTextWidgetProperties(properties)
      ? (
        <S.List>
          <S.ListItem/>
          <S.ListItem/>
          <S.ListItem/>
        </S.List>
      )
      : title === 'widget2.1'
        ? (
          <S.ButtonsWrapper>
            <S.Button type="button">test</S.Button>
          </S.ButtonsWrapper>
        )
        : (
          <S.ButtonsWrapper>
            <S.Button type="button">test</S.Button>
            <S.Button type="button">testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</S.Button>
          </S.ButtonsWrapper>
        )
    }
  </S.Card>
);
