import * as S from './Layout.styled';
import React, { FC } from 'react';
import {
  ContentArea as TContentArea,
  isFlexArea,
  isWidget,
} from '@adapters/serviceGroups/types';
import { Widget } from '@src/ui/Widget/Widget';

const ContentArea: FC<{ area: TContentArea }> = ({ area }) => {
  if (isFlexArea(area)) {
    return (
      <S.FlexArea flexDirection={area.direction}>
        {area.items.map((item, idx) => {
          if (isWidget(item)) {
            return <Widget key={idx} title={item.title} />;
          }
          return <ContentArea key={idx} area={item} />;
        })}
      </S.FlexArea>
    );
  }
  return null;
};

type Props = {
  content: TContentArea;
};

export const Layout: FC<Props> = ({ content }) => (
  <ContentArea area={content} />
);
