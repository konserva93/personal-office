import * as S from './ServiceGroupContent.styled';
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

export const ServiceGroupContent: FC<Props> = ({ content }) => (
  <S.ContentWrapper>
    <ContentArea area={content} />
  </S.ContentWrapper>
);
