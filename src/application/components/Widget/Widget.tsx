import * as S from './Widget.styled';
import {
  isListWidgetProperties,
  isTextWidgetProperties,
  isTextWithButtonWidgetProperties,
  Widget as TWidget, WidgetBinding,
} from '@adapters/serviceGroups/types';
import React, { FC } from 'react';

const Control: FC<{ properties: TProps['properties'] }> = ({ properties }: Pick<TProps, 'properties'>) => {
  if (isListWidgetProperties(properties)) {
    return (
      <S.List>
        <S.ListItem/>
        <S.ListItem/>
        <S.ListItem/>
      </S.List>
    );
  }
  if (isTextWidgetProperties(properties)) {
    return <S.TextWrapper><span>14 days</span></S.TextWrapper>;
  }
  if (isTextWithButtonWidgetProperties(properties)) {
    return <S.TextWithButtonWrapper>
      <span>14 days available for planning</span>
      <S.Button color="blue">{properties.button.caption}</S.Button>
    </S.TextWithButtonWrapper>;
  }

  return null;
};

const getDefaultMinWidth = (widgetType: TWidget['properties']['type']): string => (
  {
    text: '200px',
    textWithButton: '200px',
    buttons: '250px',
    list: '400px',
  }[widgetType]
);

type TProps = {
  title: string;
  properties: TWidget['properties'];
  binding: WidgetBinding;
};

export const Widget: FC<TProps> = ({ title, properties, binding }) => (
  <S.Card>
    <S.Header>{title}</S.Header>
    <S.ControlWrapper minWidth={binding.minWidth ?? getDefaultMinWidth(properties.type)}>
      <Control properties={properties} />
    </S.ControlWrapper>
  </S.Card>
);
