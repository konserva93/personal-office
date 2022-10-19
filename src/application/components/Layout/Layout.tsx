import * as S from './Layout.styled';
import React from 'react';
import { ContentArea } from '../../../adapters/serviceGroups/types';

type Props = {
  content: ContentArea;
};

export const Layout: React.FC<Props> = ({ content }) => (
  <S.Content
    display={content.type}
    flexDirection={content.type === 'flex' ? content.direction : undefined}
  >
    {JSON.stringify(content.items)}
  </S.Content>
);
