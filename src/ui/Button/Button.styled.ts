import styled from 'styled-components';
import { Button as SemanticButton } from 'semantic-ui-react';

export const Button = styled(SemanticButton)`
  height: 36px;
  line-height: 1em;
  min-width: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  white-space: nowrap;
  box-sizing: border-box;
`;
