import styled from 'styled-components';
import { Button as UIButton } from '@src/ui/Button/Button';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  min-height: 0;
  min-width: min-content;
  //noinspection CssInvalidPropertyValue
  max-width: fill-available;
`;

export const Header = styled.div`
  color: cornflowerblue;
  font-size: 22px;
  font-weight: bold;
  padding: 16px 24px;
`;

export const List = styled.div`
  background-color: #c4c4c4;
`;

export const ListItem = styled.div`
  height: 56px;
  width: 100%;
  border: 1px solid black;
`;

export const Button = styled(UIButton)`
  background-color: wheat;
`;

export const TextWithButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  
  > p {
    flex-grow: 1;
    flex-shrink: 1;
  }
  
  > button {
    flex-grow: 0;
    flex-shrink: 1;
  }
`;

type ControlWrapperProps = {
  minWidth: string;
};

export const ControlWrapper = styled.div<ControlWrapperProps>`
  min-width: ${({ minWidth }) => minWidth};
`;
