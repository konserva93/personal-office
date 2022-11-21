import * as S from './ServiceGroupContent.styled';
import React, { FC } from 'react';
import {
  ContentArea as TContentArea,
  isFlexArea,
  isWidgetBinding,
  Widget as TWidget,
} from '@adapters/serviceGroups/types';
import { Widget } from '@src/application/components/Widget/Widget';

const ContentArea: FC<{ area: TContentArea; widgets: TWidget[] }> = ({ area, widgets }) => {
  if (isFlexArea(area)) {
    return (
      <S.FlexArea flexDirection={area.direction}>
        {area.items.map((item, idx) => {
          if (isWidgetBinding(item)) {
            const widget = widgets.find(w => w.name === item.name);
            return widget
              ? <Widget key={idx} title={widget.title} properties={widget.properties} binding={item} />
              : null;
          }
          return <ContentArea key={idx} area={item} widgets={widgets} />;
        })}
      </S.FlexArea>
    );
  }
  return null;
};

type TProps = {
  content: TContentArea;
  widgets: TWidget[];
};

export const ServiceGroupContent: FC<TProps> = ({ content, widgets }) => (
  <S.ContentWrapper>
    <ContentArea area={content} widgets={widgets} />
  </S.ContentWrapper>
);
